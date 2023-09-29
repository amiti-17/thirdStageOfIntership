import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { SafeUser } from 'src/users/entities/safe-user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    private static extractJWTFromCookie;
    validate(payload: any): Promise<SafeUser>;
}
export {};
