import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { Weather } from 'src/weathers/entities/weather.entity';

@ObjectType()
export class Location {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  country?: string;

  @Field(() => [SafeUser], { nullable: 'items' })
  users?: SafeUser[];

  @Field(() => Weather, { nullable: true }) //TODO: should be not nullable
  weather?: Weather;

  @Field(() => Int, { nullable: true }) //TODO: should be not nullable
  weatherId?: number;
}
