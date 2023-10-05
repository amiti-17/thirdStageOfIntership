import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
// import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Location {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  // @Field()
  // users: [User];
}
