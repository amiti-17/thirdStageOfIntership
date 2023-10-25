import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { CookieOptions } from 'express';

import { strConstants } from 'src/config/system/public/strconstants';

const cookieOptions: CookieOptions = {
  maxAge: 0,
  httpOnly: true,
  domain: process.env.DOMAIN,
};

@Injectable()
export class LogoutGuard extends AuthGuard('local') {
  constructor() {
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
    const authContext = GqlExecutionContext.create(context);
    const { req } = authContext.getContext();

    req.res?.cookie(
      'access_token',
      strConstants.defaultCookieValue,
      cookieOptions,
    );
    req.res?.cookie(
      'refresh_token',
      strConstants.defaultCookieValue,
      cookieOptions,
    );

    return user;
  }
}
