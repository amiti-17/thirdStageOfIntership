import { ObjectType, Field } from '@nestjs/graphql';
// import { Location } from 'src/locations/entities/location.entity';

@ObjectType()
export class Auth {
  @Field()
  access_token: string;

  // @Field()
  // locations: [Location];
}
