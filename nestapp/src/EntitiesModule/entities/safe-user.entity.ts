/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Location } from './location.entity';

@ObjectType()
export class SafeUser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => [Location], { nullable: 'itemsAndList' })
  locations?: Location[];
}
