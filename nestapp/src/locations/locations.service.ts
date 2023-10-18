import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/createLocation.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneByFetchedObjInput } from './dto/findOneByFetchedObj.input';
import { UpdateUserLocationsInput } from './dto/updateUserLocations.input';
import { UsersService } from 'src/users/users.service';
import { Location } from './entities/location.entity';
import { CoordinatesInput } from './dto/coordinates.input';
import { selectLocation } from './selectLocation';
import { Coordinates } from 'src/config/types/coordinates';
import { WeathersService } from 'src/weathers/weathers.service';

@Injectable()
export class LocationsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private weathersService: WeathersService,
  ) {}

  async create(createLocationInput: CreateLocationInput, usersId: number) {
    const coordinates: Coordinates = {
      lat: createLocationInput.lat,
      lon: createLocationInput.lon,
    };
    const currentExists = await this.findOneByCoordinates(coordinates);
    const currentLocation = currentExists
      ? currentExists
      : await this.prisma.locations.create({
          data: {
            ...createLocationInput,
            users: {
              connect: {
                id: usersId,
              },
            },
            // weather: { // Ask: is it good way, or my current is better?
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
    await this.weathersService.create(coordinates); // Ask is it good? return into space, but action has to be done
    return await this.findOne(currentLocation.id);
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

  async getListOfPlaces(quantity: number = 5): Promise<Location[]> {
    const amountOfLocations = await this.prisma.locations.count();
    console.log('quantity: ', quantity);
    return amountOfLocations > quantity
      ? await this.prisma.locations.findMany({ take: 5 })
      : await this.prisma.locations.findMany({});
  }

  async updateUsersLocations(
    fetchedUserLocations: UpdateUserLocationsInput[],
    context,
  ): Promise<Location[]> {
    const currentUser = await this.usersService.findById(
      context?.req?.user.sub,
    );

    const shouldBeDeleted = currentUser.locations.filter((location) => {
      return !fetchedUserLocations.find(
        (el) => el.lat === location.lat && el.lon === location.lon,
      );
    });
    for (let i = 0; i < shouldBeDeleted.length; i++) {
      await this.remove(shouldBeDeleted[i].id);
    }

    for (let i = 0; i < fetchedUserLocations.length; i++) {
      const currentLoc = fetchedUserLocations[i];
      const currentUserLocal = currentUser.locations.find(
        (location) =>
          location.lat === currentLoc.lat && location.lon === currentLoc.lon,
      );
      if (currentUserLocal) {
        const coordinates = {
          lat: fetchedUserLocations[i].lat,
          lon: fetchedUserLocations[i].lon,
        };
        await this.weathersService.update(
          currentUserLocal.weatherId,
          coordinates,
        );
      } else {
        await this.create(fetchedUserLocations[i], context?.req?.user.sub);
      }
    }

    const usersLocations = (
      await this.usersService.findById(context?.req?.user.sub)
    ).locations;
    for (let i = 0; i < usersLocations.length; i++) {
      usersLocations[i].weather = await this.weathersService.findOne(
        usersLocations[i].weatherId,
      );
    }
    return usersLocations;
  }

  async remove(id: number): Promise<Location> {
    const location = await this.findOne(id);
    if (location.users.length > 1) return;
    await this.weathersService.remove(location.weatherId);
    return await this.prisma.locations.delete({ where: { id } });
  }

  async removeByCoordinates(coordinates: CoordinatesInput): Promise<Location> {
    const location = await this.findOneByCoordinates(coordinates);
    if (location.users.length > 1) return;
    await this.weathersService.remove(location.weatherId);
    return await this.prisma.locations.delete({ where: { ll: coordinates } });
  }
}
