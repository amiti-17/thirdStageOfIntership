import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    private static extractJWTRefreshFromCookie;
    validate(payload: any): Promise<{
        email: any;
        name: any;
        id: any;
    }>;
}
export {};
