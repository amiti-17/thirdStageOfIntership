import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async getAllUsers() {
    return this.userService.list({});
  }

  @Get('create')
  async createUser(
    // @Query() query: { name: string; email: string; password: string },
    @Query('name') name: string,
    @Query('email') email: string,
    @Query('password') password: string,
  ) {
    return this.userService.createUser({
      name,
      email,
      password,
    });
  }

  @Get('delete')
  async deleteUser(@Query('email') email: string) {
    return this.userService.deleteUser({ email });
  }

  @Get('findOne')
  async findOne(@Query('email') email: string) {
    return this.userService.findOne({ email });
  }
}
