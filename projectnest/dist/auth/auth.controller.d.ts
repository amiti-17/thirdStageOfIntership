import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<import("./entities/auth.entity").Auth>;
    getProfile(req: any): any;
}
