import { UsersService } from 'src/users/users.service';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { RefreshTokenResponse } from './dto/refreshToken-response';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private prisma;
    private usersServices;
    constructor(jwtService: JwtService, prisma: PrismaService, usersServices: UsersService);
    validateUser(email: string, password: string): Promise<SafeUser>;
    login(user: SafeUser): Promise<{
        status: boolean;
    }>;
    signup(createUserInput: CreateUserInput): Promise<SafeUser>;
    refreshToken(context: any): Promise<RefreshTokenResponse>;
}
