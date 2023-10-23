import { Subscription } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
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

const pubSub = new PubSub();

@Injectable()
export class LocationsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private weathersService: WeathersService,
  ) {}

  @Subscription(() => Location, {
    name: 'locationAdded',
    resolve: (value) => value,
    filter: () => true,
  })
  subscribeToLocationAdd() {
    console.log('subscription was triggered ');
    return pubSub.asyncIterator('locationAdded');
  }

  async create(createLocationInput: CreateLocationInput, usersId: number) {
    const coordinates: Coordinates = {
      lat: createLocationInput.lat,
      lon: createLocationInput.lon,
    };
    const currentExists = await this.findOneByCoordinates(coordinates);
    if (currentExists) {
      await this.prisma.locations.update({
        where: {
          ll: {
            lat: currentExists.lat,
            lon: currentExists.lon,
          },
        },
        data: {
          users: {
            connect: {
              id: usersId,
            },
          },
        },
        select: selectLocation,
      });
    } else {
      await this.prisma.locations.create({
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
      await this.weathersService.create(coordinates);
    }
    const currentLocation = await this.findOneByCoordinates(coordinates);
    pubSub.publish('locationAdded', currentLocation);
    return currentLocation;
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
      await this.remove(shouldBeDeleted[i].id, currentUser.id);
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

  async remove(id: number, usersId: number): Promise<Location> {
    const location = await this.findOne(id);
    if (location.users.length > 1) {
      await this.prisma.locations.update({
        where: {
          id,
        },
        data: {
          users: {
            disconnect: { id: usersId },
          },
        },
      });
      return;
    }
    await this.weathersService.remove(location.weatherId);
    return await this.prisma.locations.delete({ where: { id } });
  }

  async removeByCoordinates(
    coordinates: CoordinatesInput,
    usersId: number,
  ): Promise<Location> {
    const location = await this.findOneByCoordinates(coordinates);
    if (location.users.length > 1) {
      await this.prisma.locations.update({
        where: {
          ll: { ...coordinates },
        },
        data: {
          users: {
            disconnect: { id: usersId },
          },
        },
      });
      return;
    }
    await this.weathersService.remove(location.weatherId);
    return await this.prisma.locations.delete({ where: { ll: coordinates } });
  }
}
