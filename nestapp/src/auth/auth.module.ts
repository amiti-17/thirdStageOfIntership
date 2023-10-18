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
  ],
})
export class AuthModule {}
