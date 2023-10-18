import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JsonValue } from '@prisma/client/runtime/library';
import { Weather } from 'src/weathers/entities/weather.entity';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class DaysW {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  dt: number;

  @Field(() => GraphQLJSON)
  daily: JsonValue;

  @Field(() => Weather, { nullable: true })
  weather?: Weather;
}
