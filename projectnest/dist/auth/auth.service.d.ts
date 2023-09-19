import { UserController } from 'src/user/user.controller';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userController;
    private jwtService;
    constructor(userController: UserController, jwtService: JwtService);
    signIn(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}
