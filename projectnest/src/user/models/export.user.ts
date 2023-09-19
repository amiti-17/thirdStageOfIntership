import { Field } from '@nestjs/graphql';

export class ExportUser {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
