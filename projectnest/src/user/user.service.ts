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

  async createUser(params: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const { name, email, password } = params;
    const data: Prisma.UserCreateInput = {
      name,
      email,
      password,
    };
    return this.prisma.user.create({ data });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where,
    });
  }
}
