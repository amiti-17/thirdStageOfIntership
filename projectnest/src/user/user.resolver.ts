// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
// import { User } from './models/user.model';
// import { UserService } from './user.service';
// import { Query } from '@nestjs/common';

// @Resolver((of: any) => User)
// export class AuthorsResolver {
//   constructor(private userService: UserService) {}

//   @Query((returns: any) => User)
//   async author(@Query('email') email: string) {
//     return this.userService.findOne({ email });
//   }
// }
