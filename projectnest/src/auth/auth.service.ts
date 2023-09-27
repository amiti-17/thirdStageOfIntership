/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { UsersController } from 'src/users/users.controller';
import { Auth } from './entities/auth.entity';
import { UsersService } from 'src/users/users.service';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { LoginResponse } from './dto/login-response';
import { AuthLoginInput } from './dto/auth-login.input';
import { User } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    private usersServices: UsersService,
    private jwtService: JwtService,
  ) {}

  // async signIn(email: string, pass: string): Promise<LoginResponse> {
  //   const user = await this.validate(email, pass);
  //   // console.log('current user: ', user);
  //   // if (!user) throw new UnauthorizedException();

  //   const payload = {
  //     sub: user.id,
  //     email: user.email,
  //     name: user.name,
  //   };

  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //     user,
  //   };
  // }

  // async validate(email: string, password: string): Promise<SafeUser> {
  //   const user = await this.usersServices.findOneUnsafe(email);
  //   if (user?.password === password) {
  //     const { password, ...data } = user;
  //     return data;
  //   }

  //   throw new UnauthorizedException();
  // }

  async validateUser(email: string, password: string): Promise<SafeUser> {
    const user = await this.usersServices.findOneUnsafe(email);

    //TODO: make this more secure
    if (user && user.password === password) {
      const { password, ...safeUser } = user;
      return safeUser;
    }

    throw new UnauthorizedException();
  }

  async login(user: User) {
    // const user = await this.usersServices.findOneUnsafe(authLoginInput.email);
    // const { password, ...safeUser } = user;
    // console.log('user: ', user);
    return {
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        email: user.email,
        name: user.name,
      }),
    };
  }

  async signup(createUserInput: CreateUserInput) {
    const user = await this.usersServices.findOne(createUserInput.email);

    if (user) throw new Error('User already exists');

    return await this.usersServices.create({
      ...createUserInput,
    });
  }
}
