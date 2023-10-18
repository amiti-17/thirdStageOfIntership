import { Module } from '@nestjs/common';
import { CurrentWService } from './currentW.service';

@Module({
  providers: [CurrentWService],
  exports: [CurrentWService],
})
export class CurrentWModule {}
