/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { UsersController } from 'src/users/users.controller';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private userController: UsersController,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<Auth> {
    const user = await this.userController.findOne(email);
    console.log('current user: ', user);
    if (user.password !== pass) throw new UnauthorizedException();

    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
