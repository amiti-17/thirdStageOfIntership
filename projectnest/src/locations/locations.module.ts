import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LocationsResolver, LocationsService, PrismaService],
})
export class LocationsModule {}
