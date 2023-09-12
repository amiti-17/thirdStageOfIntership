/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from '@nestjs/common';
import AuthorsService from './authors.service';
import Author from './models/models';

@Resolver((of: any) => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query((returns) => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(String(id));
  }

  @ResolveField('posts', (returns) => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.authorsService.findAll({ lastName: String(id) });
  }
}
