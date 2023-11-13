import { Resolver, Args, Mutation, Context } from '@nestjs/graphql';
import { Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshTokenResponse } from './dto/refreshToken-response';
import { AuthLoginInput } from './dto/auth-login.input';
import { LoginResponse } from './dto/login-response';
import { User } from 'src/modules/users/entities/user.entity';
import { CreateUserInput } from 'src/modules/users/dto/create-user.input';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-token.guard';
import { Response } from 'express';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('authLoginInput') authLoginInput: AuthLoginInput,
    @Res() res: Response,
  ): Promise<LoginResponse> {
    return await this.authService.login(authLoginInput, res);
  }

  @Mutation(() => LoginResponse)
  async logout(@Res() res: Response) {
    return await this.authService.logout(res);
  }

  @Mutation(() => RefreshTokenResponse)
  @UseGuards(JwtRefreshAuthGuard)
  async refreshToken(
    @Res() res: Response,
    @Context() context,
  ): Promise<RefreshTokenResponse> {
    return this.authService.refreshToken(res, context);
  }

  @Mutation(() => User, { name: 'createUser' })
  async signup(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.authService.signup(createUserInput);
  }
}
