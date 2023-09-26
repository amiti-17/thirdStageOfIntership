import { ObjectType, Field } from '@nestjs/graphql';
// import { Location } from 'src/locations/entities/location.entity';

@ObjectType()
export class Auth {
  @Field()
  token: string;

  // @Field()
  // locations: [Location];
}
