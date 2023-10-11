/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Location } from 'src/locations/entities/location.entity';
// import { Location } from 'src/locations/entities/location.entity';

@ObjectType()
export class SafeUser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => [Location], { nullable: 'items' })
  locations?: Location[];
}
