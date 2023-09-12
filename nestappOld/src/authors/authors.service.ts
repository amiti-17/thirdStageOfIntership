/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import GetAuthorArgs from './dto/get-author.args';

@Injectable()
export default class AuthorsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: GetAuthorArgs): Promise<GetAuthorArgs> {
    return {
      firstName: 'create',
      lastName: 'Shk',
    };
  }

  async findOneById(id: string): Promise<GetAuthorArgs> {
    return {
      firstName: 'findOneById',
      lastName: 'Shk',
    };
  }

  async findAll(recipesArgs: GetAuthorArgs): Promise<GetAuthorArgs[]> {
    return [
      {
        firstName: 'findOneById',
        lastName: 'Shk',
      },
      {
        firstName: 'create',
        lastName: 'Shk',
      },
    ];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
