import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
// import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';

@Resolver(() => SafeUser)
// @UseGuards(JwtAuthGuard)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersController: UsersController,
  ) {}

  @Mutation(() => SafeUser)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [SafeUser], { name: 'users' })
  findAll() {
    return this.usersController.getAllUsers();
  }

  @Query(() => SafeUser, { name: 'user' })
  findOne(@Args('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Query(() => User, { name: 'userUnsafe' })
  findOneUnsafe(@Args('email') email: string) {
    return this.usersService.findOneUnsafe(email);
  }

  @Mutation(() => SafeUser)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => SafeUser)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
