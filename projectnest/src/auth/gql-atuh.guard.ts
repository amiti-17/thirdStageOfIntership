import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { authConstants } from './authConstants';
import { regExp } from 'config/system/regExp';
import { JwtService } from '@nestjs/jwt';
import { CookieOptions } from 'express';

const domain = 'localhost';
const jwtExpiresSecond = authConstants.expiresTime.match(regExp.int)[0];

const HTTP_ONLY_COOKIE: CookieOptions = {
  maxAge: Number(jwtExpiresSecond) * 1000,
  httpOnly: true,
  domain,
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
    console.log('here', request.cookies);
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

    const access_token = this.jwtService.sign({
      sub: user.id,
      name: user.name,
      email: user.email,
    });

    // req.res?.setCookie
    req.res?.cookie('access_token', access_token, HTTP_ONLY_COOKIE);

    return user;
  }
}
