import { AppService } from './app.service';
import { UserService } from './dataBase/user.service';
export declare class AppController {
    private readonly appService;
    private readonly userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): string;
    getAllUsers(): Promise<{
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createUser(): Promise<{
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
