import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class UpdateUserLocationInput {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  @Field()
  name: string;
}
