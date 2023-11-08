import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CurrentW } from 'src/currentW/entities/currentW.entity';
import { DaysW } from 'src/daysW/entities/daysW.entity';
import { Location } from 'src/locations/entities/location.entity';

@ObjectType()
export class Weather {
  @Field(() => Int)
  id: number;

  @Field(() => CurrentW, { nullable: true })
  current?: CurrentW;

  @Field(() => Int)
  currentId: number;

  @Field(() => [DaysW], { nullable: true })
  days?: DaysW[];

  @Field(() => Location, { nullable: true })
  locations?: Location;
}
