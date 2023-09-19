import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/app.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    list(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]>;
    createUser(params: {
        name: string;
        email: string;
        password: string;
    }): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    findOne(where: Prisma.UserWhereUniqueInput): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
