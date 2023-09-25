import { CreateLocationInput } from './create-location.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FindOneByCoordinatesInput extends CreateLocationInput {
  @Field(() => Int)
  lat: number;

  @Field(() => Int)
  lon: number;
}
