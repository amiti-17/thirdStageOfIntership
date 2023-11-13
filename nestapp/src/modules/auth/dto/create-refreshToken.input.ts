import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRefreshTokenInput {
  @Field()
  userId: number;

  @Field()
  refresh_token: string;
}
