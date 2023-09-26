import { Resolver, Query, Args } from '@nestjs/graphql';
import { Auth } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Auth, { name: 'login' })
  findAll(
    @Args('authLoginInput') authLoginInput: AuthLoginInput,
  ): Promise<Auth> {
    return this.authService.signIn(
      authLoginInput.email,
      authLoginInput.password,
    );
  }
}
