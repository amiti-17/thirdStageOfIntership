import { Resolver, Args, Mutation, Context } from '@nestjs/graphql';
import { Auth } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { LoginResponse } from './dto/login-response';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-atuh.guard';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('authLoginInput') authLoginInput: AuthLoginInput,
    @Context() context,
  ) {
    // console.log('context: ', context);
    return await this.authService.login(context.user);
  }

  @Mutation(() => SafeUser)
  async signup(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.authService.signup(createUserInput);
  }

  // @Query(() => LoginResponse, { name: 'login' })
  // @UseGuards(AuthGuard)
  // async login(
  //   // @Args('authLoginInput') authLoginInput: AuthLoginInput,
  //   @Context('req') req: Request,
  // ): Promise<Auth> {
  //   const result = await this.authService.signIn(
  //     req.user?.email,
  //     req.user?.password,
  //   );

  //   req.res?.cookie('access_token', result.access_token, {
  //     expires: new Date(
  //       new Date().getTime() +
  //         Number(authConstants.expiresTime.match(regExp.int)[0]),
  //     ),
  //     httpOnly: true,
  //     sameSite: 'strict',
  //   });
  //   // console.log(result);
  //   return result;
  // }
}
