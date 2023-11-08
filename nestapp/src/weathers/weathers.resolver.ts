import { Query, Args, Int, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Weather } from './entities/weather.entity';
import { WeathersService } from './weathers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => Weather)
export class WeathersResolver {
  constructor(private weathersService: WeathersService) {}

  @Query(() => Weather, { name: 'getWeather' })
  @UseGuards(JwtAuthGuard)
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.weathersService.findAndUpdateIfNeed(id);
  }
}
