import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshTokenResponse } from './dto/refreshToken-response';
import { AuthLoginInput } from './dto/auth-login.input';
import { LoginResponse } from './dto/login-response';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-token.guard';
import { LogoutGuard } from './guards/logout.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Args('authLoginInput') authLoginInput: AuthLoginInput,
  ): Promise<LoginResponse> {
    return await this.authService.login();
  }

  @Mutation(() => LoginResponse)
  @UseGuards(LogoutGuard)
  async logout() {
    return await this.authService.logout();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Boolean, { name: 'ping' })
  async ping() {
    return true;
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Mutation(() => RefreshTokenResponse)
  async refreshToken(): Promise<RefreshTokenResponse> {
    return this.authService.refreshToken();
  }

  @Mutation(() => SafeUser)
  async signup(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.authService.signup(createUserInput);
  }
}
