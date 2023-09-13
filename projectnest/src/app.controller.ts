/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './dataBase/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list')
  async getAllUsers() {
    return this.userService.list({});
  }

  @Get('create')
  async createUser() {
    return this.userService.createUser({ name: 'Tim', email: 'some@some.com' });
  }
}
