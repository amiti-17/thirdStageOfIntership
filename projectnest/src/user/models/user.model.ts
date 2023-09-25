/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User type' })
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  email: string;

  @Field({ description: 'Password of user' })
  password: string;
}
