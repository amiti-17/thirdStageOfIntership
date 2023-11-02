import { Query, Args, Int, Resolver, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Weather } from './entities/weather.entity';
import { WeathersService } from './weathers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Coordinates } from 'src/config/types/coordinates';
import { CoordinatesInput } from './dto/coordinates.input';

@Resolver(() => Weather)
export class WeathersResolver {
  constructor(private weathersService: WeathersService) {}

  @Query(() => Weather, { name: 'getWeather' })
  @UseGuards(JwtAuthGuard)
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.weathersService.findOne(id);
  }

  @Mutation(() => Weather, { name: 'updateWeather' })
  @UseGuards(JwtAuthGuard)
  async updateOne(
    @Args('id', { type: () => Int })
    id: number,
    @Args('coordinates', { type: () => CoordinatesInput })
    coordinates: Coordinates,
  ) {
    return await this.weathersService.fetchAndUpdateAll(id, coordinates);
  }
}
