import { ObjectType, Field, Int } from '@nestjs/graphql';
// import { Location } from 'src/locations/entities/location.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  // @Field()
  // locations: [Location];
}