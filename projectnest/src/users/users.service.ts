/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<SafeUser> {
    const { password, ...data } = await this.prisma.users.create({
      data: {
        ...createUserInput,
      },
    });
    return data;
  }

  async findAll(): Promise<SafeUser[]> {
    return (await this.prisma.users.findMany()).map((user) => {
      const { password, ...data } = user;
      return data;
    });
  }

  async findOne(email: string): Promise<SafeUser> {
    const { password, ...data } = await this.prisma.users.findUnique({
      where: { email },
    });
    return data;
  }

  async findOneUnsafe(email: string): Promise<User> {
    return await this.prisma.users.findUnique({ where: { email } });
  }

  async update(
    id: number,
    updateUserInput: UpdateUserInput,
  ): Promise<SafeUser> {
    const { password, ...user } = await this.prisma.users.update({
      where: { id },
      data: { locations: updateUserInput as any }, // TODO: figureout how it should work!!!
    });
    return user;
  }

  async remove(id: number): Promise<SafeUser> {
    const { password, ...user } = await this.prisma.users.delete({
      where: { id },
    });
    return user;
  }
}
