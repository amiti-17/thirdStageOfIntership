/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { UsersController } from 'src/users/users.controller';
import { Auth } from './entities/auth.entity';
import { UsersService } from 'src/users/users.service';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { LoginResponse } from './dto/login-response';

@Injectable()
export class AuthService {
  constructor(
    private usersServices: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<LoginResponse> {
    const user = await this.validate(email, pass);
    // console.log('current user: ', user);
    if (!user) throw new UnauthorizedException();

    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }

  async validate(email: string, password: string): Promise<SafeUser | null> {
    const user = await this.usersServices.findOneUnsafe(email);
    if (user.password === password) {
      const { password, ...data } = user;
      return data;
    }

    return null;
  }
}
