"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtRefreshTokenStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const authConstants_1 = require("../authConstants");
class JwtRefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh-token') {
    constructor(usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                JwtRefreshTokenStrategy.extractJWTRefreshFromCookie,
            ]),
            ignoreExpiration: false,
            secretOrKey: authConstants_1.authConstants.refresh_secret,
            usernameField: 'email',
        });
        this.usersService = usersService;
    }
    static extractJWTRefreshFromCookie(req) {
        if (req.cookies && req.cookies.refresh_token) {
            return req.cookies.refresh_token;
        }
        return null;
    }
    async validate(payload) {
        return { email: payload.email, name: payload.name, id: payload.sub };
    }
}
exports.JwtRefreshTokenStrategy = JwtRefreshTokenStrategy;
//# sourceMappingURL=jwt-refresh-token.strategy.js.map