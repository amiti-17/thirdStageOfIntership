import { Resolver, Args, Mutation, Context } from '@nestjs/graphql';
import { Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshTokenResponse } from './dto/refreshToken-response';
import { AuthLoginInput } from './dto/auth-login.input';
import { LoginResponse } from './dto/login-response';
// import { GqlAuthGuard } from './guards/gql-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-token.guard';
import { LogoutGuard } from './guards/logout.guard';
import { Response, Request } from 'express';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('authLoginInput') authLoginInput: AuthLoginInput,
    @Res() req: Request,
  ): Promise<LoginResponse> {
    return await this.authService.login(authLoginInput, req);
  }

  @Mutation(() => LoginResponse)
  @UseGuards(LogoutGuard)
  async logout() {
    return await this.authService.logout();
  }

  @Mutation(() => RefreshTokenResponse)
  @UseGuards(JwtRefreshAuthGuard)
  async refreshToken(@Context() context): Promise<RefreshTokenResponse> {
    return this.authService.refreshToken(context);
  }

  @Mutation(() => User, { name: 'createUser' })
  async signup(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.authService.signup(createUserInput);
  }
}
