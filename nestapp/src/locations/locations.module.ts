import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from 'src/users/users.module';
import { LocationsResolver } from './locations.resolver';
import { WeathersModule } from 'src/weathers/weathers.module';

@Module({
  imports: [HttpModule, UsersModule, WeathersModule],
  providers: [
    LocationsResolver,
    LocationsService,
    PrismaService,
    WeathersModule,
  ],
})
export class LocationsModule {}
