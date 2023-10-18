import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

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
      secretOrKey: process.env.REFRESH_SECRET,
      usernameField: 'email',
    });
  }

  private static extractJWTRefreshFromCookie(req: Request): string | null {
    if (req.cookies && req.cookies.refresh_token) {
      return req.cookies.refresh_token;
    }

    return null;
  }

  async validate(payload: any) {
    return { email: payload.email, name: payload.name, id: payload.sub };
  }
}
