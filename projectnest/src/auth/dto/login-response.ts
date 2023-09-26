import { Field, ObjectType } from '@nestjs/graphql';
import { SafeUser } from 'src/users/entities/safe-user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field()
  user: SafeUser;
}
