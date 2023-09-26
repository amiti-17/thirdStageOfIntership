import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, UsersController],
  exports: [UsersController],
})
export class UsersModule {}
