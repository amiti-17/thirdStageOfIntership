import { Injectable } from '@nestjs/common';
import { Coordinates } from 'src/config/types/coordinates';
import { DaysWService } from 'src/daysW/daysW.service';
import { fetchWeatherByCoordinates } from 'src/functions/fetch/fetchWeatherByCoordinates';
import { PrismaService } from 'src/prisma/prisma.service';

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
          JSON.stringify(fetchedDays),
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
          connect: localDays.map((el) => el.id),
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

  // async update() {
  //   const fetchedWeather = await fetchWeatherByCoordinates(coordinates);

  // }

  // async remove() {

  // }
}
