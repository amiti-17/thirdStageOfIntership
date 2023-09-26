import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @Get('test')
  // async test() {
  //   return 'plain text';
  // }

  @Get('findAll')
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Get('create')
  async createUser(
    // @Query() query: { name: string; email: string; password: string },
    @Query('name') name: string,
    @Query('email') email: string,
    @Query('password') password: string,
  ) {
    return this.userService.create({
      name,
      email,
      password,
    });
  }

  @Get('delete')
  async deleteUser(@Query('email') email: string) {
    const currentOne = await this.findOne(email);
    return this.userService.remove(currentOne.id);
  }

  @Get('findOne')
  async findOne(@Query('email') email: string) {
    return this.userService.findOne(email);
  }
}
