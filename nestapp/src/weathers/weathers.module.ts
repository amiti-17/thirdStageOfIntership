import { Module } from '@nestjs/common';
import { WeathersService } from './weathers.service';

@Module({
  providers: [WeathersService],
})
export class WeathersModule {}
