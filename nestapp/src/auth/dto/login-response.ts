import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  status: boolean;
}
