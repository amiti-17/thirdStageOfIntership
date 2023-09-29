import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { LoginResponse } from './dto/login-response';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { RefreshTokenResponse } from './dto/refreshToken-response';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(authLoginInput: AuthLoginInput, context: any): Promise<LoginResponse>;
    ping(): Promise<boolean>;
    refreshToken(context: any): Promise<RefreshTokenResponse>;
    signup(createUserInput: CreateUserInput): Promise<SafeUser>;
}
