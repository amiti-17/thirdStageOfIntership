import { Module } from '@nestjs/common';
import { WeathersResolver } from './weathers.resolver';
import { WeathersService } from './weathers.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { DaysWModule } from 'src/daysW/daysW.module';

@Module({
  imports: [DaysWModule],
  providers: [PrismaService, WeathersService, WeathersResolver],
  exports: [WeathersService],
})
export class WeathersModule {}
