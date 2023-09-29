import { ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth.service';
declare const GqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthGuard extends GqlAuthGuard_base {
    private jwtService;
    private authService;
    constructor(jwtService: JwtService, authService: AuthService);
    getRequest(context: ExecutionContext): any;
    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext): TUser;
}
export {};
