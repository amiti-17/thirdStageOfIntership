import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { CookieOptions } from 'express';
import { regExp } from 'src/config/system/regExp';
import { UnauthorizedError } from 'src/CustomError/Unauthorized';

const jwtExpiresSecond = process.env.EXPIRES_TIME.match(regExp.int)[0];

const accessCookieOptions: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 0.01,
  httpOnly: true,
  domain: process.env.DOMAIN,
};
const refreshCookieOptions: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 10000,
  httpOnly: true,
  domain: process.env.DOMAIN,
};

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor(private jwtService: JwtService) {
    super();
  }
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().authLoginInput;
    return request;
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
  ): TUser {
    if (err || !user || info) {
      // throw err || new UnauthorizedException();
      throw new UnauthorizedError();
    }

    const authContext = GqlExecutionContext.create(context);
    const { req } = authContext.getContext();

    const access_token = this.jwtService.sign(
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

    const refresh_token = this.jwtService.sign(
      {
        email: user.email,
        sub: user.id,
        name: user.name,
      },
      {
        secret: process.env.REFRESH_SECRET,
        expiresIn: `${Number(jwtExpiresSecond) * 10}s`,
      },
    );

    req.res?.cookie('access_token', access_token, accessCookieOptions);
    req.res?.cookie('refresh_token', refresh_token, refreshCookieOptions);

    return user;
  }
}
