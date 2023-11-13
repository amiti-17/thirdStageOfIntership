import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { selectDay } from './selectDay';

@Injectable()
export class DaysWService {
  constructor(private prisma: PrismaService) {}

  async create(dt: number, daily: string) {
    return await this.prisma.days.create({
      data: {
        dt,
        daily,
      },
      select: selectDay,
    });
  }

  async update(id: number, weatherId: number, dt: number, daily: string) {
    return await this.prisma.days.update({
      where: { id },
      data: { dt, daily, weather: { connect: { id: weatherId } } },
      select: selectDay,
    });
  }

  async remove(id) {
    return await this.prisma.days.delete({ where: { id } });
  }

  async removeMany(weatherId: number) {
    return await this.prisma.days.deleteMany({ where: { weatherId } });
  }
}
