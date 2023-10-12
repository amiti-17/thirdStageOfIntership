import { Injectable } from '@nestjs/common';
import { JsonValue } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { selectDay } from './selectDay';

@Injectable()
export class DaysWService {
  constructor(private prisma: PrismaService) {}

  async create(dt: number, daily: JsonValue) {
    return await this.prisma.days.create({
      data: {
        dt,
        daily,
      },
      select: selectDay,
    });
  }

  // async findOne(daily: JsonValue) {
  //   const currentDay = this.prisma.days.findUnique({
  //     where: {
  //       daily,
  //     },
  //     select: selectDay,
  //   });
  //   return currentDay;
  // }
}
