/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExportUser } from 'src/user/models/export.user';
import { UserController } from 'src/user/user.controller';

@Injectable()
export class AuthService {
  constructor(private userController: UserController) {}

  async signIn(email: string, pass: string): Promise<ExportUser> {
    const user = await this.userController.findOne(email);

    if (user.password !== pass) throw new UnauthorizedException();

    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object

    return result;
  }
}
