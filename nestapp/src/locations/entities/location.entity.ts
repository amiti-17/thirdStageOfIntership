import { ObjectType, Field, Int } from '@nestjs/graphql';
// import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Location {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  lat: number;

  @Field(() => Int)
  lon: number;

  // @Field()
  // users: [User];
}
