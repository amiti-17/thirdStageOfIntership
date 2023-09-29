import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';
export declare class UsersResolver {
    private readonly usersService;
    private readonly usersController;
    constructor(usersService: UsersService, usersController: UsersController);
    createUser(createUserInput: CreateUserInput): Promise<SafeUser>;
    findAll(): Promise<SafeUser[]>;
    findOne(email: string): Promise<SafeUser>;
    findById(id: number): Promise<SafeUser>;
    findOneUnsafe(email: string): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): Promise<SafeUser>;
    removeUser(id: number): Promise<SafeUser>;
}
