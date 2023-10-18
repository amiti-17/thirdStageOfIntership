import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh-token.strategy';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.access_secret, //TODO: after figured out how does env work, move...
      signOptions: { expiresIn: process.env.EXPIRES_TIME },
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    JwtRefreshTokenStrategy,
    LocalStrategy,
    PrismaService,

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
