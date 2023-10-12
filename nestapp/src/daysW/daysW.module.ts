import { Module } from '@nestjs/common';
import { DaysWService } from './daysW.service';

@Module({
  providers: [DaysWService],
})
export class DaysWModule {}
