import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { regExp } from 'src/config/system/regExp';
import {
  accessCookieOptions,
  refreshCookieOptions,
} from 'src/config/system/cookiesOption';
import { strConstants } from 'src/config/public/strConstants';

const jwtExpiresSecond = process.env.EXPIRES_TIME.match(regExp.int)[0];

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
      throw err || new UnauthorizedException();
      // throw new UnauthorizedError();
    }

    const authContext = GqlExecutionContext.create(context);
    const { req } = authContext.getContext();

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

    const refreshToken = this.jwtService.sign(
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

    req.res?.cookie(strConstants.accessToken, accessToken, accessCookieOptions);
    req.res?.cookie(
      strConstants.refreshToken,
      refreshToken,
      refreshCookieOptions,
    );

    return user;
  }
}
