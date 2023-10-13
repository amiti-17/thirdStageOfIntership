import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserLocationsInput } from './dto/updateUserLocations.input';
import { FindOneByFetchedObjInput } from './dto/findOneByFetchedObj.input';
// import { UpdateLocationInput } from './dto/update-location.input';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) {}

  // @Mutation(() => Location)
  // async createLocation(
  //   @Args('createLocationInput') createLocationInput: CreateLocationInput,
  // ) {
  //   return await this.locationsService.create(createLocationInput);
  // }

  @Query(() => [Location], { name: 'locations' })
  async findAll() {
    return await this.locationsService.findAll();
  }

  @Query(() => Location, { name: 'locationById' })
  @UseGuards(JwtAuthGuard)
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.locationsService.findOne(id);
  }

  @Query(() => Location, { name: 'locationByCoordinates' })
  @UseGuards(JwtAuthGuard)
  async findOneByFetchedObj(
    @Args('coordinates') coordinates: FindOneByFetchedObjInput,
    // @Context() context,
  ) {
    // console.log(context.req?.user);
    return {
      id: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ...coordinates,
    }; // await this.locationsService.findOneByCoordinates(coordinates);
  }

  @Query(() => [Location])
  @UseGuards(JwtAuthGuard)
  async getListOfPlaces(
    @Args('quantity', { type: () => Int }) quantity: number,
  ): Promise<Location[]> {
    return await this.locationsService.getListOfPlaces(quantity);
  }

  @Mutation(() => [Location])
  @UseGuards(JwtAuthGuard)
  async updateUsersLocations(
    @Args('updateUserLocationInput', { type: () => [UpdateUserLocationsInput] })
    updateUserLocationInput: UpdateUserLocationsInput[],
    @Context() context,
  ): Promise<Location[]> {
    return await this.locationsService.updateUsersLocations(
      updateUserLocationInput,
      context,
    );
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
