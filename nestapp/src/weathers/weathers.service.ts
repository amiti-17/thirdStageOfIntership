/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Coordinates } from 'src/config/types/coordinates';
import { DaysWService } from 'src/daysW/daysW.service';
import { fetchWeatherByCoordinates } from 'src/functions/fetch/fetchWeatherByCoordinates';
import { PrismaService } from 'src/prisma/prisma.service';
import { selectWeather } from './selectWeather';

@Injectable()
export class WeathersService {
  constructor(
    private prisma: PrismaService,
    private daysWService: DaysWService,
  ) {}

  async create(coordinates: Coordinates) {
    const fetchedWeather = await fetchWeatherByCoordinates(coordinates);
    const fetchedDays = fetchedWeather.daily.slice(0, 3);
    const localDays = [];
    for (let i = 0; i < fetchedDays.length; i++) {
      localDays.push(
        await this.daysWService.create(
          fetchedDays[i].dt,
          JSON.stringify(fetchedDays[i]),
        ),
      );
    }

    const localWeather = await this.prisma.weathers.create({
      data: {
        current: {
          create: {
            dt: fetchedWeather.current.dt,
            current: JSON.stringify(fetchedWeather.current),
          },
        },
        days: {
          connect: localDays.map((el) => ({ id: el.id })),
        },
        locations: {
          connect: {
            ll: coordinates,
          },
        },
      },
    });

    return localWeather;
  }

  async findOne(id: number) {
    return await this.prisma.weathers.findUnique({
      where: { id },
      select: selectWeather,
    });
  }

  async update(id: number, coordinates: Coordinates) {
    const currentWeather = await this.findOne(id);
    const fetchedWeather = await fetchWeatherByCoordinates(coordinates);
    fetchedWeather.daily = fetchedWeather.daily.slice(0, 3);
    const weather = await this.prisma.weathers.update({
      where: {
        id,
      },
      data: {
        current: {
          update: {
            data: {
              dt: fetchedWeather.current.dt,
              current: JSON.stringify(fetchedWeather.current),
            },
          },
        },
      },
      select: selectWeather,
    });
    for (let i = 0; i < weather.days.length; i++) {
      await this.daysWService.update(
        weather.days[i].id,
        weather.id,
        fetchedWeather.daily[i].dt,
        JSON.stringify(fetchedWeather.daily[i]),
      );
    }
    return await this.findOne(id);
  }

  async remove(weatherId: number) {
    const weather = await this.findOne(weatherId);
    if (weather.locations.length > 1) return;
    const deletedDays = await this.daysWService.removeMany(weather.id); // Ask: how make it better (unused variables...)
    const deleteCurrentW = await this.prisma.current.delete({
      where: { id: weather.currentId },
    }); // Ask: Is it good, if its the only place, where I use just prisma.current...
    return await this.prisma.weathers.delete({ where: { id: weather.id } });
  }
}
