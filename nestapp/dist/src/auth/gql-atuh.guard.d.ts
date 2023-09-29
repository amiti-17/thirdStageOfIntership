import { ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
declare const GqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthGuard extends GqlAuthGuard_base {
    private jwtService;
    constructor(jwtService: JwtService);
    getRequest(context: ExecutionContext): any;
    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext): TUser;
}
export {};
