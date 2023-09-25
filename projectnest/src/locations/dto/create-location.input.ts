import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field(() => Int)
  lat: number;

  @Field(() => Int)
  lon: number;
}
