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
import { selectLocation } from './selectLocation';
import { fetchWeatherByCoordinates } from 'src/functions/fetch/fetchWeatherByCoordinates';
import { Coordinates } from 'src/config/types/coordinates';
import { WeathersService } from 'src/weathers/weathers.service';

@Injectable()
export class LocationsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private weathersService: WeathersService,
  ) {} // private httpService: HttpService,

  async create(createLocationInput: CreateLocationInput, usersId: number) {
    const coordinates: Coordinates = {
      lat: createLocationInput.lat,
      lon: createLocationInput.lon,
    };
    const ifCurrentExists = await this.findOneByCoordinates(coordinates);
    // console.log('weather: ', await fetchWeatherByCoordinates(coordinates));
    const currentLocation = ifCurrentExists
      ? ifCurrentExists
      : await this.prisma.locations.create({
          data: {
            ...createLocationInput,
            users: {
              connect: {
                id: usersId,
              },
            },
            // weather: {
            //   create: {
            //     current: {
            //       create: {
            //         dt: currentWeather.current.dt,
            //         current: JSON.stringify(currentWeather.current),
            //       },
            //     },
            //     days: {
            //       create: currentWeather.daily.slice(0, 3).map((el) => {
            //         return {
            //           dt: el.dt,
            //           daily: JSON.stringify(el),
            //         };
            //       }),
            //     },
            //   },
            // },
          },
          select: selectLocation,
        });
    this.weathersService.create(coordinates);
  }

  async findAll() {
    return await this.prisma.locations.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.locations.findUnique({
      where: { id },
      select: selectLocation,
    });
  }

  async findOneByCoordinates(coordinates: CoordinatesInput): Promise<Location> {
    return await this.prisma.locations.findUnique({
      where: { ll: { ...coordinates } },
      select: selectLocation,
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

  async remove(locationId: number): Promise<Location> {
    if ((await this.findOne(locationId)).users.length > 1) return;
    // this.weathersService
    return await this.prisma.locations.delete({ where: { id: locationId } });
  }

  async removeByCoordinates(coordinates: CoordinatesInput): Promise<Location> {
    if ((await this.findOneByCoordinates(coordinates)).users.length > 1) return;
    return await this.prisma.locations.delete({ where: { ll: coordinates } });
  }
}
// invoice, vipiska z carty, vipiska paypal in PDF, link on the product on sites or skreenshot form personal cabinet, passport both sidex
