import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { strConstants } from 'src/config/public/strConstants';
import { defaultCookieOptions } from 'src/config/system/cookiesOption';

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
      strConstants.accessToken,
      strConstants.defaultCookieValue,
      defaultCookieOptions,
    );
    req.res?.cookie(
      strConstants.refreshToken,
      strConstants.defaultCookieValue,
      defaultCookieOptions,
    );

    return user;
  }
}
