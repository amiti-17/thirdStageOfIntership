/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExportUser } from 'src/user/models/export.user';
import { UserController } from 'src/user/user.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userController: UserController,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.userController.findOne(email);

    if (user.password !== pass) throw new UnauthorizedException();

    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };
    // TODO: Generate a JWT and return it here
    // instead of the user object

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
