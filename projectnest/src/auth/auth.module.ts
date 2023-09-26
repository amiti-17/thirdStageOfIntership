import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { authConstants } from './authConstants';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: authConstants.secret,
      signOptions: { expiresIn: authConstants.expiresTime },
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class AuthModule {}

// export const IS_PUBLIC_KEY = 'isPublic';
// export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
