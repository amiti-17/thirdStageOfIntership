import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    createUser(name: string, email: string, password: string): Promise<User>;
    deleteUser(email: string): Promise<User>;
    findOne(email: string): Promise<any>;
}
