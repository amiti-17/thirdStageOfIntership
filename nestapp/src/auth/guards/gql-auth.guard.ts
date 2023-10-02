import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { authConstants } from '../authConstants';
import { regExp } from 'config/system/regExp';
import { JwtService } from '@nestjs/jwt';
import { CookieOptions } from 'express';
import { AuthService } from '../auth.service';

const jwtExpiresSecond = authConstants.expiresTime.match(regExp.int)[0];

const HTTP_ONLY_COOKIE_ACCESS: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 1000,
  httpOnly: true,
  domain: authConstants.domain,
};
const HTTP_ONLY_COOKIE_REFRESH: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 10000,
  httpOnly: true,
  domain: authConstants.domain,
};

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) {
    super();
  }
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().authLoginInput;
    // console.log('gql auth guard cookies', request);
    return request;
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
  ): TUser {
    if (err || !user || info) throw err || new UnauthorizedException();

    const authContext = GqlExecutionContext.create(context);
    const { req } = authContext.getContext();
    // console.log('context: ', req.res?.cookie);

    const access_token = this.jwtService.sign(
      {
        sub: user.id,
        name: user.name,
        email: user.email,
      },
      {
        secret: authConstants.access_secret,
        expiresIn: authConstants.expiresTime,
      },
    );

    const refresh_token = this.jwtService.sign(
      {
        email: user.email,
        sub: user.id,
        name: user.name,
      },
      {
        secret: authConstants.refresh_secret,
        expiresIn: `${Number(jwtExpiresSecond) * 10}s`,
      },
    );

    req.res?.cookie('access_token', access_token, HTTP_ONLY_COOKIE_ACCESS);
    req.res?.cookie('refresh_token', refresh_token, HTTP_ONLY_COOKIE_REFRESH);

    return user;
  }
}
