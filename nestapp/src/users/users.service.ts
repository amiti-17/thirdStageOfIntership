/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserWithPassword } from './entities/user-password.entity';
import { Location } from 'src/locations/entities/location.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { selectUser } from './selectUser';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.prisma.users.create({
      data: {
        ...createUserInput,
      },
      select: selectUser,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.users.findMany({
      select: selectUser,
    });
  }

  async findOne(filter: { email: string } | { id: number }): Promise<User> {
    return await this.prisma.users.findUnique({
      where: filter,
      select: selectUser,
    });
  }
  async findOneUnsafe(email: string): Promise<UserWithPassword> {
    return await this.prisma.users.findUnique({
      where: { email },
      select: {
        ...selectUser,
        password: true,
      },
    });
  }

  async getAllLocations(id: number): Promise<Location[]> {
    const { locations } = await this.prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        locations: true,
      },
    });
    return locations;
  }

  async remove(id: number): Promise<User> {
    return await this.prisma.users.delete({
      where: { id },
      select: selectUser,
    });
  }
}
