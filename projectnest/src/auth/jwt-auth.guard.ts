import {
  ExecutionContext,
  Injectable,
  // UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
// import { authConstants } from './authConstants';
// import { regExp } from 'config/system/regExp';
import { JwtService } from '@nestjs/jwt';

// const domain = 'localhost';
// const jwtExpiresSecond = authConstants.expiresTime.match(regExp.int)[0];

// const HTTP_ONLY_COOKIE = {
//   maxAge: Number(jwtExpiresSecond) * 1000,
//   httpOnly: true,
//   signed: true,
//   domain,
// };

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
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

  // handleRequest<TUser = any>(
  //   err: any,
  //   user: any,
  //   info: any,
  //   context: ExecutionContext,
  // ): TUser {
  //   if (err || !user || info) throw err || new UnauthorizedException();

  //   const authContext = GqlExecutionContext.create(context);
  //   const { req } = authContext.getContext();
  //   // console.log('context: ', req.res?.cookie);

  //   const access_token = this.jwtService.sign({
  //     sub: user.id,
  //     name: user.name,
  //     email: user.email,
  //   });

  //   // req.res?.setCookie
  //   req.res?.cookie('access_token', access_token, HTTP_ONLY_COOKIE);

  //   return user;
  // }
}
