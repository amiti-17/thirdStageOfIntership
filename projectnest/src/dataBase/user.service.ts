/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/app.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async list(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      // skip, //ToDo change skip to offset and take to limit
      // take,
      // cursor,
      // where,
      // orderBy,
    });
  }

  async createUser(params: { name?: string; email?: string }): Promise<User> {
    const { name, email } = params;
    const data: Prisma.UserCreateInput = {
      name: name || '',
      email: email || '',
    };
    return this.prisma.user.create({ data });
  }
}
