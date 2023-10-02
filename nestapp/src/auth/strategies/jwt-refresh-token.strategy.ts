import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { authConstants } from '../authConstants';
// import { UnauthorizedException } from '@nestjs/common';
// import { SafeUser } from 'src/users/entities/safe-user.entity';

export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtRefreshTokenStrategy.extractJWTRefreshFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: authConstants.refresh_secret,
      usernameField: 'email',
    });
  }

  private static extractJWTRefreshFromCookie(req: Request): string | null {
    console.log('jwtRefresh strategy cookies: ', req.cookies);
    if (req.cookies && req.cookies.refresh_token) {
      return req.cookies.refresh_token;
    }

    return null;
  }

  async validate(payload: any) {
    console.log('jwtRefresh strategy payload: ', payload);
    return { email: payload.email, name: payload.name, id: payload.sub };
    // console.log('here', payload);
    // const { email } = payload;
    // const user: SafeUser = await this.usersService.findOne(email);

    // if (!user) throw new UnauthorizedException();

    // return user;
  }
}
