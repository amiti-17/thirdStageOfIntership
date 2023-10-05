import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { authConstants } from '../authConstants';
// import { UnauthorizedException } from '@nestjs/common';
import { SafeUser } from 'src/users/entities/safe-user.entity';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWTFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: authConstants.access_secret,
      usernameField: 'email',
    });
  }

  private static extractJWTFromCookie(req: Request): string | null {
    // console.log('jwt strategy cookies: ', req);
    if (req.cookies && req.cookies.access_token) {
      return req.cookies.access_token;
    }

    return null;
  }

  async validate(payload: any): Promise<SafeUser> {
    return { id: payload.sub, email: payload.email, name: payload.name };
    // console.log('here', payload);
    // const { email } = payload;
    // const user: SafeUser = await this.usersService.findOne(email);

    // if (!user) throw new UnauthorizedException();

    // return user;
  }
}
