import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { strConstants } from 'src/config/public/strConstants';
import { accessCookieOptions } from 'src/config/system/cookiesOption';

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard('jwt-refresh-token') {
  constructor(private jwtService: JwtService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
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

    if (err || !user || info) {
      throw err || new UnauthorizedException();
    }

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

    req.res?.cookie(strConstants.accessToken, accessToken, accessCookieOptions);

    return user;
  }
}
