import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { authConstants } from '../authConstants';
// import { IS_PUBLIC_KEY } from './auth.module';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // console.log('here');
    // it`s for skipAuth, deprecated
    // const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    // if (isPublic) {
    //   return true;
    // }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    // console.log('token: ', token);
    if (!token) throw new UnauthorizedException();
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: authConstants.access_secret,
      });
      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
