import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Context,
  Subscription,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserLocationsInput } from './dto/updateUserLocations.input';
import { FindOneByFetchedObjInput } from './dto/findOneByFetchedObj.input';
import { pubSub } from './pubSub';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) {}

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
  ) {
    return await this.locationsService.findOneByCoordinates(coordinates);
    // {
    //   id: 0,
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    //   ...coordinates,
    // };
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

  @Subscription(() => Location, {
    name: 'locationAdded',
    resolve: (value) => value,
    filter: (payload, variables, context) => {
      return Boolean(payload.users.find((el) => el.id === variables.usersId));
      console.log('payload: ', payload);
      console.log('variables: ', variables);
      console.log('context: ', context);
      return true;
    },
  })
  subscribeToLocationAdd(
    @Args('usersId', { type: () => Int }) usersId: string,
  ) {
    return pubSub.asyncIterator('locationAdded');
  }

  @Subscription(() => Location, {
    name: 'locationRemoved',
    resolve: (value) => value,
    filter: (payload, variables, context) => {
      return Boolean(payload.users.find((el) => el.id === variables.usersId));
      console.log('payload1: ', payload);
      console.log('variables1: ', variables);
      console.log('context1: ', context);
      return true;
    },
  })
  subscribeToLocationRemoved(
    @Args('usersId', { type: () => Int }) usersId: string,
  ) {
    return pubSub.asyncIterator('locationRemoved');
  }
}
