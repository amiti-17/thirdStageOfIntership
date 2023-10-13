/* eslint-disable @typescript-eslint/no-unused-vars */
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
  ) {} // private httpService: HttpService,

  async create(createLocationInput: CreateLocationInput, usersId: number) {
    const coordinates: Coordinates = {
      lat: createLocationInput.lat,
      lon: createLocationInput.lon,
    };
    const currentExists = await this.findOneByCoordinates(coordinates);
    // console.log('weather: ', await fetchWeatherByCoordinates(coordinates));
    const currentLocation = currentExists // TODO: can it be currentLocation ??= await...
      ? currentExists
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
    const weather = await this.weathersService.create(coordinates);
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

    // if (!currentUser.locations.length) { //Is it could make execution faster?
    //   // const returned = [];
    //   for (let i = 0; i < fetchedUserLocations.length; i++) {
    //     const currentLocation = await this.create(
    //       fetchedUserLocations[i],
    //       context?.req?.user.sub,
    //     );
    //     console.log('current location: ', currentLocation);
    //   }
    //   return await this.usersService.getAllLocations(context?.req?.user.sub);
    // }

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
      // console.log('currentUserLocal: ', currentUserLocal, currentLoc, currentUserLocal, currentUser);
      if (currentUserLocal) {
        const coordinates = {
          lat: fetchedUserLocations[i].lat,
          lon: fetchedUserLocations[i].lon,
        };
        // console.log(
        //   'locationsService, updateUsersLocations, input for weathersService.update: ',
        //   currentUserLocal,
        //   coordinates,
        // );
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
      // usersLocations[i].weather.current = await this.prisma.current.findUnique({ where: {id: usersLocations[i].weather.currentId}, select: { id: true, dt: true, current: true}})
      // usersLocations[i].weather.days = await this.prisma.days.findMany( { where: {OR: {}}})
      usersLocations[i].weather = await this.weathersService.findOne(
        usersLocations[i].weatherId,
      );
    }
    // console.log('locationService, updateUsersLocations: ', usersLocations);
    // const returned = [];
    // for (let i = 0; i < returnedValue.length; i++) {
    //   const currentLocation = returnedValue[i];
    //   currentLocation.weather = await this.lo
    //   returned.push(currentValue);
    // }
    return usersLocations;
  }

  // update(id: number, updateLocationInput: UpdateLocationInput) {
  //   return this.prisma.locations.update({
  //     where: { id },
  //     data: { ...updateLocationInput },
  //   });
  // }

  async remove(id: number): Promise<Location> {
    const location = await this.findOne(id);
    if (location.users.length > 1) return;
    const removedWeather = await this.weathersService.remove(
      location.weatherId,
    );
    return await this.prisma.locations.delete({ where: { id } });
  }

  async removeByCoordinates(coordinates: CoordinatesInput): Promise<Location> {
    const location = await this.findOneByCoordinates(coordinates);
    if (location.users.length > 1) return;
    const removedWeather = await this.weathersService.remove(
      location.weatherId,
    );
    return await this.prisma.locations.delete({ where: { ll: coordinates } });
  }
}
