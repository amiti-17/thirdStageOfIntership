/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { SafeUser } from 'src/users/entities/safe-user.entity';
// import { User } from 'src/users/entities/user.entity';

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

  @Field((type) => [SafeUser])
  users?: SafeUser[];
}
