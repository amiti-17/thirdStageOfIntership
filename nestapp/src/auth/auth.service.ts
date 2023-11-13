import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { RefreshTokenResponse } from './dto/refreshToken-response';
import { AuthLoginInput } from './dto/auth-login.input';
import { JwtService } from '@nestjs/jwt';
import { regExp } from 'src/config/system/regExp';
import { Response } from 'express';
import { strConstants } from 'src/config/public/strConstants';
import {
  accessCookieOptions,
  defaultCookieOptions,
  refreshCookieOptions,
} from 'src/config/system/cookiesOption';

@Injectable()
export class AuthService {
  constructor(
    private usersServices: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersServices.findOneUnsafe(email);

    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...safeUser } = user;
      return safeUser;
    }

    throw new UnauthorizedException();
  }

  async login(authLoginInput: AuthLoginInput, res: Response) {
    const user = await this.validateUser(
      authLoginInput.email,
      authLoginInput.password,
    );
    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user);
    this.attachTokens(res, accessToken, refreshToken);
    return {
      status: true,
    };
  }

  generateAccessToken(user: User): string {
    const accessToken = this.jwtService.sign(
      {
        sub: user.id,
        name: user.name,
        email: user.email,
      },
      {
        secret: process.env.ACCESS_SECRET,
        expiresIn: process.env.EXPIRES_TIME,
      },
    );
    return accessToken;
  }

  generateRefreshToken(user: User): string {
    const jwtExpiresSecond = process.env.EXPIRES_TIME.match(regExp.int)[0];
    const refreshToken = this.jwtService.sign(
      {
        sub: user.id,
        name: user.name,
        email: user.email,
      },
      {
        secret: process.env.REFRESH_SECRET,
        expiresIn: `${Number(jwtExpiresSecond) * 10}s`,
      },
    );
    return refreshToken;
  }

  attachTokens(res, accessToken: string, refreshToken: string): void {
    console.log(res);
    res?.res.cookie(strConstants.accessToken, accessToken, accessCookieOptions);
    res?.res.cookie(
      strConstants.refreshToken,
      refreshToken,
      refreshCookieOptions,
    );
  }

  attachDefaultTokens(res): void {
    res.res?.cookie(
      strConstants.accessToken,
      strConstants.defaultCookieValue,
      defaultCookieOptions,
    );
    res.res?.cookie(
      strConstants.refreshToken,
      strConstants.defaultCookieValue,
      defaultCookieOptions,
    );
  }

  async logout(res: Response) {
    this.attachDefaultTokens(res);
    return {
      status: true,
    };
  }

  async signup(createUserInput: CreateUserInput) {
    const user = await this.usersServices.findOne({
      email: createUserInput.email,
    });

    if (user) throw new Error('User already exists');

    return await this.usersServices.create({
      ...createUserInput,
    });
  }

  async refreshToken(res, context): Promise<RefreshTokenResponse> {
    const newAccessToken = this.generateAccessToken(context.req.user);
    res?.res.cookie(
      strConstants.accessToken,
      newAccessToken,
      accessCookieOptions,
    );
    return { status: true };
  }
}
