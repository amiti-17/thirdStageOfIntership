import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { authConstants } from './authConstants';
import { UnauthorizedException } from '@nestjs/common';
import { AuthLoginInput } from './dto/auth-login.input';
import { SafeUser } from 'src/users/entities/safe-user.entity';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConstants.secret,
      usernameField: 'email',
    });
  }

  async validate(payload: AuthLoginInput) {
    console.log('here', payload);
    const { email } = payload;
    const user: SafeUser = await this.usersService.findOne(email);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
