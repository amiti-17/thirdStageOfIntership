import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/createLocation.input';
import { CoordinatesInput } from './dto/coordinates.input';
import { Location } from './entities/location.entity';
import { selectLocation } from './selectLocation';
import { Coordinates } from 'src/config/types/coordinates';
import { WeathersService } from 'src/modules/weathers/weathers.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { pubSub } from './pubSub';

@Injectable()
export class LocationsService {
  constructor(
    private prisma: PrismaService,
    private weathersService: WeathersService,
  ) {}

  async createWithWeather(
    createLocationInput: CreateLocationInput,
    usersId: number,
  ) {
    const coordinates: Coordinates = {
      lat: createLocationInput.lat,
      lon: createLocationInput.lon,
    };
    const currentExists = await this.findOne({ ll: coordinates });
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
        },
        select: selectLocation,
      });
      await this.weathersService.fetchAndCreateAll(coordinates);
    }
    const currentLocation = await this.findOne({ ll: coordinates });
    pubSub.publish('locationAdded', currentLocation);
    return currentLocation;
  }

  async findAll() {
    return await this.prisma.locations.findMany();
  }

  async findOne(filter: { id: number } | { ll: CoordinatesInput }) {
    return await this.prisma.locations.findUnique({
      where: filter,
      select: selectLocation,
    });
  }

  async getListOfPlaces(quantity: number = 5): Promise<Location[]> {
    const amountOfLocations = await this.prisma.locations.count();
    return amountOfLocations > quantity
      ? await this.prisma.locations.findMany({ take: 5 })
      : await this.prisma.locations.findMany({});
  }

  async remove(
    filter: { id: number } | { ll: CoordinatesInput },
    usersId: number,
  ): Promise<Location> {
    const location = await this.findOne(filter);
    if (location.users.length > 1) {
      const currentLocation = await this.prisma.locations.update({
        where: filter,
        data: {
          users: {
            disconnect: { id: usersId },
          },
        },
        select: selectLocation,
      });
      pubSub.publish('locationRemoved', currentLocation);
      return location;
    }
    await this.weathersService.removeWithAllRelated(location.weatherId);
    const currentLocation = await this.prisma.locations.delete({
      where: filter,
      select: selectLocation,
    });
    currentLocation.users = [];
    pubSub.publish('locationRemoved', currentLocation);
    return currentLocation;
  }
}
