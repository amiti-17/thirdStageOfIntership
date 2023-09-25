import { JwtService } from '@nestjs/jwt';
import { UsersController } from 'src/users/users.controller';
export declare class AuthService {
    private userController;
    private jwtService;
    constructor(userController: UsersController, jwtService: JwtService);
    signIn(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}
