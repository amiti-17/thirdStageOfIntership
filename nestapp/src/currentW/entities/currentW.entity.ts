/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JsonValue } from '@prisma/client/runtime/library';
import GraphQLJSON from 'graphql-type-json';
import { Weather } from 'src/weathers/entities/weather.entity';
// import { JSONObject } from '../JsonObjScalar';

@ObjectType()
export class CurrentW {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  dt: number;

  @Field(() => GraphQLJSON)
  current: JsonValue;

  @Field(() => Weather, { nullable: true })
  weather?: Weather;
}