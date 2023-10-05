import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { authConstants } from '../authConstants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    // request.body = ctx.getArgs().authUserInput;
    // console.log(request, 'from jwt-auth.guards');
    return request;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    // console.log('token: ', request.cookies['access_token']);
    try {
      const payload = await this.jwtService.verifyAsync(
        request.cookies['access_token'],
        {
          secret: authConstants.access_secret,
          ignoreExpiration: false,
        },
      );
      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
