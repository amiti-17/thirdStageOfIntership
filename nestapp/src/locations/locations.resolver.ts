import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/createLocation.input';
import { FindOneByCoordinatesInput } from './dto/findOneByCoordinates.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserLocationInput } from './dto/updateUserLocation.input';
// import { UpdateLocationInput } from './dto/update-location.input';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) {}

  @Mutation(() => Location)
  async createLocation(
    @Args('createLocationInput') createLocationInput: CreateLocationInput,
  ) {
    return await this.locationsService.create(createLocationInput);
  }

  @Query(() => [Location], { name: 'locations' })
  async findAll() {
    return await this.locationsService.findAll();
  }

  @Query(() => Location, { name: 'locationById' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.locationsService.findOne(id);
  }

  @Query(() => Location, { name: 'locationByCoordinates' })
  @UseGuards(JwtAuthGuard)
  async findOneByCoordinates(
    @Args('coordinates') coordinates: FindOneByCoordinatesInput,
    // @Context() context,
  ) {
    // console.log(context.req?.user);
    console.log({
      id: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ...coordinates,
    });
    return {
      id: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ...coordinates,
    }; // await this.locationsService.findOneByCoordinates(coordinates);
  }

  @Mutation(() => [Location])
  async updateUserLocationInput(
    @Args('updateUserLocationInput')
    updateUserLocationInput: UpdateUserLocationInput,
  ) {
    return this.locationsService.updateUserLocation(updateUserLocationInput);
  }

  // @Mutation(() => Location)
  // updateLocation(@Args('updateLocationInput') updateLocationInput: UpdateLocationInput) {
  //   return this.locationsService.update(updateLocationInput.id, updateLocationInput);
  // }

  @Mutation(() => Location)
  async removeLocation(@Args('id', { type: () => Int }) id: number) {
    return await this.locationsService.remove(id);
  }
}
