/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/createLocation.input';
// import { UpdateLocationInput } from './dto/update-location.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneByFetchedObjInput } from './dto/findOneByFetchedObj.input';
// import { HttpService } from '@nestjs/axios';
import { UpdateUserLocationsInput } from './dto/updateUserLocations.input';
import { UsersService } from 'src/users/users.service';
import { Location } from './entities/location.entity';
import { CoordinatesInput } from './dto/coordinates.input';

@Injectable()
export class LocationsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {} // private httpService: HttpService,

  async create(createLocationInput: CreateLocationInput, usersId: number) {
    const ifCurrentExists = await this.findOneByCoordinates({
      lat: createLocationInput.lat,
      lon: createLocationInput.lon,
    });
    return ifCurrentExists
      ? ifCurrentExists
      : await this.prisma.locations.create({
          data: {
            ...createLocationInput,
            users: {
              connect: {
                id: usersId,
              },
            },
          },
          select: {
            name: true,
            state: true,
            country: true,
            lat: true,
            lon: true,
            id: true,
            users: true,
          },
        });
  }

  async findAll() {
    return await this.prisma.locations.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.locations.findUnique({
      where: { id },
      select: {
        name: true,
        state: true,
        country: true,
        lat: true,
        lon: true,
        id: true,
        users: true,
      },
    });
  }

  async findOneByCoordinates(coordinates: CoordinatesInput): Promise<Location> {
    return await this.prisma.locations.findUnique({
      where: { ll: { ...coordinates } },
      select: {
        name: true,
        state: true,
        country: true,
        lat: true,
        lon: true,
        id: true,
        users: true,
      },
    });
  }

  async findOneByFetchedObjInput(fetchedObj: FindOneByFetchedObjInput) {
    return await this.prisma.locations.findUnique({
      where: {
        ll: {
          lat: fetchedObj.lat,
          lon: fetchedObj.lon,
        },
      },
    });
  }

  async updateUsersLocations(
    updateUserLocations: UpdateUserLocationsInput[],
    context,
  ): Promise<Location[]> {
    const currentUser = await this.usersService.findById(
      context?.req?.user.sub,
    );

    // if (!currentUser.locations.length) { //Is it could make execution faster?
    //   // const returned = [];
    //   for (let i = 0; i < updateUserLocations.length; i++) {
    //     const currentLocation = await this.create(
    //       updateUserLocations[i],
    //       context?.req?.user.sub,
    //     );
    //     console.log('current location: ', currentLocation);
    //   }
    //   return await this.usersService.getAllLocations(context?.req?.user.sub);
    // }

    const shouldBeDeleted = currentUser.locations.filter((location) => {
      return !updateUserLocations.find(
        (el) => el.lat === location.lat && el.lon === location.lon,
      );
    });
    for (let i = 0; i < shouldBeDeleted.length; i++) {
      await this.remove(shouldBeDeleted[i].id);
    }

    for (let i = 0; i < updateUserLocations.length; i++) {
      const currentLoc = updateUserLocations[i];
      if (
        !currentUser.locations.find(
          (location) =>
            location.lat === currentLoc.lat && location.lon === currentLoc.lon,
        )
      ) {
        await this.create(updateUserLocations[i], context?.req?.user.sub);
      }
    }

    return await this.usersService.getAllLocations(context?.req?.user.sub);
  }

  // update(id: number, updateLocationInput: UpdateLocationInput) {
  //   return this.prisma.locations.update({
  //     where: { id },
  //     data: { ...updateLocationInput },
  //   });
  // }

  async remove(id: number): Promise<Location> {
    if ((await this.findOne(id)).users.length > 1) return;
    return await this.prisma.locations.delete({ where: { id } });
  }

  async removeByCoordinates(coordinates: CoordinatesInput): Promise<Location> {
    if ((await this.findOneByCoordinates(coordinates)).users.length > 1) return;
    return await this.prisma.locations.delete({ where: { ll: coordinates } });
  }
}
// invoice, vipiska z carty, vipiska paypal in PDF, link on the product on sites or skreenshot form personal cabinet, passport both sidex
