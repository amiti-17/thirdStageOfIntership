import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => SafeUser)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => SafeUser)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [SafeUser], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.usersService.findAll();
  }

  @Query(() => SafeUser, { name: 'user' })
  async findOne(@Args('email') email: string) {
    return await this.usersService.findOne(email);
  }

  @Query(() => SafeUser, { name: 'findById' })
  async findById(@Args('id') id: number) {
    return await this.usersService.findById(id);
  }

  @Query(() => SafeUser, { name: 'getCurrentUser' })
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@Context() context) {
    return await this.findById(context.req.user.sub);
  }

  @Query(() => User, { name: 'userUnsafe' })
  async findOneUnsafe(@Args('email') email: string) {
    return await this.usersService.findOneUnsafe(email);
  }

  @Mutation(() => SafeUser)
  async removeUser(@Args('id', { type: () => Int }) id: number) {
    return await this.usersService.remove(id);
  }
}
