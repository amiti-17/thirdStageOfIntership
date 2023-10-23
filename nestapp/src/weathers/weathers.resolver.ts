import { Resolver } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { Weather } from './entities/weather.entity';

// const pubSub = new PubSub();

@Resolver(() => Weather)
export class WeathersResolver {
  constructor() {}

  // @Subscription(() => String, {
  //   name: 'weatherUpdated',
  // })
  // subscribeToWeatherUpdate() {
  //   return pubSub.asyncIterator('weatherUpdated');
  // }
}
