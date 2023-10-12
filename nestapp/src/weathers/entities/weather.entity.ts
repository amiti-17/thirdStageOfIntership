import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CurrentW } from 'src/currentW/entities/currentW.entity';
import { DaysW } from 'src/daysW/entities/daysW.entity';
import { Location } from 'src/locations/entities/location.entity';

@ObjectType()
export class Weather {
  @Field(() => Int)
  id: number;

  @Field()
  current: CurrentW;

  @Field()
  currentDt: number;

  @Field(() => [DaysW], { nullable: 'items' })
  days?: DaysW[];

  @Field(() => [Location], { nullable: 'items' })
  locations?: Location[];
}
