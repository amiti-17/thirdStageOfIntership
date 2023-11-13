import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserWithPassword } from './entities/user-password.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('email') email: string) {
    return await this.usersService.findOne({ email });
  }

  @Query(() => User, { name: 'findById' })
  async findById(@Args('id') id: number) {
    return await this.usersService.findOne({ id });
  }

  @Query(() => User, { name: 'getCurrentUser' })
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@Context() context) {
    return await this.usersService.findOne({ id: context.req.user.sub });
  }

  @Query(() => UserWithPassword, { name: 'userUnsafe' }) // used for testing
  async findOneUnsafe(@Args('email') email: string) {
    return await this.usersService.findOneUnsafe(email);
  }

  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => Int }) id: number) {
    return await this.usersService.remove(id);
  }
}
