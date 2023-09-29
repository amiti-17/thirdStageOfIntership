import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { authConstants } from '../authConstants';
import { CookieOptions } from 'express';
import { regExp } from 'config/system/regExp';

const jwtExpiresSecond = authConstants.expiresTime.match(regExp.int)[0];

const HTTP_ONLY_COOKIE_ACCESS: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 1000,
  httpOnly: true,
  domain: authConstants.domain,
};

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard('jwt-refresh-token') {
  constructor(private jwtService: JwtService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    // request.body = ctx.getArgs().authUserInput;
    console.log(request.cookies, 'from jwt-auth.guards');
    return request;
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    // status?: any,
  ): TUser {
    // console.log('jwtRefreshAuthGuard: ', err, user, info, status);

    if (err || !user || info) throw err || new UnauthorizedException();

    const authContext = GqlExecutionContext.create(context);
    const { req } = authContext.getContext();

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

    req.res?.cookie('access_token', access_token, HTTP_ONLY_COOKIE_ACCESS);

    return user;
  }
}