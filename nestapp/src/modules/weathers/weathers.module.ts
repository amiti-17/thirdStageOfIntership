import { Module } from '@nestjs/common';
import { WeathersResolver } from './weathers.resolver';
import { WeathersService } from './weathers.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { DailyWeatherModule } from 'src/modules/dailyWeather/dailyWeather.module';

@Module({
  imports: [DailyWeatherModule],
  providers: [PrismaService, WeathersService, WeathersResolver],
  exports: [WeathersService],
})
export class WeathersModule {}
