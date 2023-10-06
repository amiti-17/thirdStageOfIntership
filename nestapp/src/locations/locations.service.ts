/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/createLocation.input';
// import { UpdateLocationInput } from './dto/update-location.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneByCoordinatesInput } from './dto/findOneByCoordinates.input';
import { HttpService } from '@nestjs/axios';
import { UpdateUserLocationInput } from './dto/updateUserLocation.input';

@Injectable()
export class LocationsService {
  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
  ) {}
  async create(createLocationInput: CreateLocationInput) {
    return await this.prisma.locations.create({
      data: { ...createLocationInput },
    });
  }

  async findAll() {
    return await this.prisma.locations.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.locations.findUnique({ where: { id } });
  }

  async findOneByCoordinates(coordinates: FindOneByCoordinatesInput) {
    return await this.prisma.locations.findUnique({
      where: { ll: { ...coordinates } },
    });
  }

  async updateUserLocation(
    updateUserLocationInput: UpdateUserLocationInput,
  ): Promise<Location> {
    return {} as Location;
  }

  // update(id: number, updateLocationInput: UpdateLocationInput) {
  //   return this.prisma.locations.update({
  //     where: { id },
  //     data: { ...updateLocationInput },
  //   });
  // }

  async remove(id: number) {
    return await this.prisma.locations.delete({ where: { id } });
  }
}
