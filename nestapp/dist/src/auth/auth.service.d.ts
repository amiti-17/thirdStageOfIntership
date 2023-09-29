import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
export declare class AuthService {
    private usersServices;
    private jwtService;
    constructor(usersServices: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<SafeUser>;
    login(user: User): Promise<{
        access_token: string;
    }>;
    signup(createUserInput: CreateUserInput): Promise<SafeUser>;
}
