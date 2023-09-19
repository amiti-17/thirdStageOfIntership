import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/app.service';

@Module({
  imports: [PrismaService],
  controllers: [UserController],
  providers: [UserService, UserController, PrismaService],
  exports: [UserService, UserController],
})
export class UserModule {}
