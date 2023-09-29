import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { authConstants } from './authConstants';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: authConstants.secret, //TODO: after figured out how does env work, move...
      signOptions: { expiresIn: authConstants.expiresTime },
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    LocalStrategy,
    // JwtAuthGuard,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class AuthModule {}

// export const IS_PUBLIC_KEY = 'isPublic';
// export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
