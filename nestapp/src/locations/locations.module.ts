import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from 'src/users/users.module';
import { LocationsResolver } from './locations.resolver';

@Module({
  imports: [HttpModule, UsersModule],
  providers: [LocationsResolver, LocationsService, PrismaService],
})
export class LocationsModule {}
