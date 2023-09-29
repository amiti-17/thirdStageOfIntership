import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserInput: CreateUserInput): Promise<SafeUser>;
    findAll(): Promise<SafeUser[]>;
    findOne(email: string): Promise<SafeUser>;
    findById(id: number): Promise<SafeUser>;
    findOneUnsafe(email: string): Promise<User>;
    update(id: number, updateUserInput: UpdateUserInput): Promise<SafeUser>;
    remove(id: number): Promise<SafeUser>;
}
