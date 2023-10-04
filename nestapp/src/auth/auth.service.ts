/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { RefreshTokenResponse } from './dto/refreshToken-response';
import { CreateRefreshTokenInput } from './dto/create-refreshToken.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private usersServices: UsersService,
  ) {}

  // async createRefreshToken(createRefreshTokenInput: CreateRefreshTokenInput) {
  //   return await this.prisma.refreshToken.create({
  //     data: {
  //       userId: createRefreshTokenInput.userId,
  //       refresh_token: createRefreshTokenInput.refresh_token,
  //     },
  //   });
  // }

  // async getRefreshToken(userId: number) {
  //   // eslint-disable-next-line prettier/prettier
  //   return await this.prisma.refreshToken.findUnique({ where: { userId: userId } });
  // }

  // async deleteRefreshToken(userId: number) {
  //   return await this.prisma.refreshToken.delete({ where: { userId: userId } });
  // }

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

  async login(user: SafeUser) {
    // const user = await this.usersServices.findOneUnsafe(authLoginInput.email);
    // const { password, ...safeUser } = user;
    // console.log('user: ', user);
    return {
      status: true,
    };
  }

  async signup(createUserInput: CreateUserInput) {
    const user = await this.usersServices.findOne(createUserInput.email);

    if (user) throw new Error('User already exists');

    return await this.usersServices.create({
      ...createUserInput,
    });
  }

  async refreshToken(context): Promise<RefreshTokenResponse> {
    // console.log('context refresh Token service', context);
    return { status: true };
  }
}
