import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
// import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => SafeUser)
// @UseGuards(JwtAuthGuard)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersController: UsersController,
  ) {}

  @Mutation(() => SafeUser)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [SafeUser], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  async findAll() {
    // console.log(context.req.user);
    return await this.usersController.getAllUsers();
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
    console.log('getCurrentUser context:', context.req.user);
    // Object.keys(context.req).forEach(key => console.log(key))
    const currentUser = await this.findById(context.req.user.sub);
    return currentUser;
  }

  @Query(() => User, { name: 'userUnsafe' })
  async findOneUnsafe(@Args('email') email: string) {
    return await this.usersService.findOneUnsafe(email);
  }

  // @Mutation(() => SafeUser)
  // async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return await this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  @Mutation(() => SafeUser)
  async removeUser(@Args('id', { type: () => Int }) id: number) {
    return await this.usersService.remove(id);
  }
}
