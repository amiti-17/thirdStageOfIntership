import { Module } from '@nestjs/common';
import { DaysWService } from './daysW.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService, DaysWService],
  exports: [DaysWService],
})
export class DaysWModule {}
