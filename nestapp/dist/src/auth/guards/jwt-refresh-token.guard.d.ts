import { ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
declare const JwtRefreshAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtRefreshAuthGuard extends JwtRefreshAuthGuard_base {
    private jwtService;
    constructor(jwtService: JwtService);
    getRequest(context: ExecutionContext): any;
    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext): TUser;
}
export {};
