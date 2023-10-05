import { CreateLocationInput } from './create-location.input';
import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class FindOneByCoordinatesInput extends CreateLocationInput {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;
}
