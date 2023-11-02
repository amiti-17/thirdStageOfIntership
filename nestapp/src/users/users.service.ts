/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';
import { Location } from 'src/locations/entities/location.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { selectUser } from './selectUser';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<SafeUser> {
    return await this.prisma.users.create({
      data: {
        ...createUserInput,
      },
      select: selectUser,
    });
  }

  async findAll(): Promise<SafeUser[]> {
    return await this.prisma.users.findMany({
      select: selectUser,
    });
  }

  async findOne(email: string): Promise<SafeUser> {
    return await this.prisma.users.findUnique({
      where: { email },
      select: selectUser,
    });
  }

  async findById(id: number): Promise<SafeUser> {
    return await this.prisma.users.findUnique({
      where: { id },
      select: selectUser,
    });
  }

  async getCurrentUser(context: any): Promise<SafeUser> {
    return await context.req.user;
  }

  async findOneUnsafe(email: string): Promise<User> {
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

  async remove(id: number): Promise<SafeUser> {
    return await this.prisma.users.delete({
      where: { id },
      select: selectUser,
    });
  }
}
