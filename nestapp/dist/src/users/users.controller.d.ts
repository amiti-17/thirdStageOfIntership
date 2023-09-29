import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<import("./entities/safe-user.entity").SafeUser[]>;
    createUser(name: string, email: string, password: string): Promise<import("./entities/safe-user.entity").SafeUser>;
    deleteUser(email: string): Promise<import("./entities/safe-user.entity").SafeUser>;
    findOne(email: string): Promise<import("./entities/safe-user.entity").SafeUser>;
}
