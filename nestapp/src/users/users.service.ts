/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';
import { Location } from 'src/locations/entities/location.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<SafeUser> {
    return await this.prisma.users.create({
      data: {
        ...createUserInput,
      },
      select: {
        name: true,
        email: true,
        id: true,
        locations: true,
      },
    });
  }

  async findAll(): Promise<SafeUser[]> {
    return await this.prisma.users.findMany({
      select: {
        name: true,
        email: true,
        id: true,
        locations: true,
      },
    });
  }

  async findOne(email: string): Promise<SafeUser> {
    return await this.prisma.users.findUnique({
      where: { email },
      select: {
        name: true,
        email: true,
        id: true,
        locations: true,
      },
    });
  }

  async findById(id: number): Promise<SafeUser> {
    return await this.prisma.users.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
        id: true,
        locations: true,
      },
    });
  }

  async getCurrentUser(context: any): Promise<SafeUser> {
    return await context.req.user;
  }

  async findOneUnsafe(email: string): Promise<User> {
    return await this.prisma.users.findUnique({
      where: { email },
      select: {
        name: true,
        email: true,
        id: true,
        locations: true,
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

  // async update(
  //   id: number,
  //   updateUserInput: UpdateUserInput,
  // ): Promise<SafeUser> {
  //   const { password, ...user } = await this.prisma.users.update({
  //     where: { id },
  //     data: { locations: updateUserInput as any }, // TODO: figureout how it should work!!!
  //   });
  //   return user;
  // }

  async remove(id: number): Promise<SafeUser> {
    return await this.prisma.users.delete({
      where: { id },
      select: {
        name: true,
        email: true,
        id: true,
        locations: true,
      },
    });
  }
}
