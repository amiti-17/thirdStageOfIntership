import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, PrismaService, UsersController, UsersService],
  exports: [UsersController, UsersService],
})
export class UsersModule {}
