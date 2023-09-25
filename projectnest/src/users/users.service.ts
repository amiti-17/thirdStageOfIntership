/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.users.create({
      data: {
        ...createUserInput,
      },
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(email: string) {
    return this.prisma.users.findUnique({
      where: { email },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.users.update({
      where: { id },
      data: { locations: updateUserInput as any }, // TODO: figureout how it should work!!!
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
