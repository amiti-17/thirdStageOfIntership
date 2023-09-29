import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(authLoginInput: AuthLoginInput, context: any): Promise<{
        access_token: string;
    }>;
    signup(createUserInput: CreateUserInput): Promise<SafeUser>;
}
