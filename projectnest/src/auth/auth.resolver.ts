import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { Auth } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { Request } from 'express';
import { LoginResponse } from './dto/login-response';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => LoginResponse, { name: 'login' })
  @UseGuards(JwtAuthGuard)
  async login(
    @Args('authLoginInput') authLoginInput: AuthLoginInput,
    @Context('req') req: Request,
  ): Promise<Auth> {
    const result = await this.authService.signIn(
      authLoginInput.email,
      authLoginInput.password,
    );

    req.res?.cookie('token', result.access_token);
    // console.log(result);
    return result;
  }
}
