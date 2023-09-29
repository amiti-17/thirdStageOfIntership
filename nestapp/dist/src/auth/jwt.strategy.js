"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const authConstants_1 = require("./authConstants");
const common_1 = require("@nestjs/common");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                JwtStrategy.extractJWTFromCookie,
            ]),
            ignoreExpiration: false,
            secretOrKey: authConstants_1.authConstants.secret,
            usernameField: 'email',
        });
        this.usersService = usersService;
    }
    static extractJWTFromCookie(req) {
        console.log('cookies: ', req.cookies);
        if (req.cookies && req.cookies.access_token) {
            return req.cookies.access_token;
        }
        return null;
    }
    async validate(payload) {
        return { id: payload.sub, email: payload.email, name: payload.name };
        const { email } = payload;
        const user = await this.usersService.findOne(email);
        if (!user)
            throw new common_1.UnauthorizedException();
        return user;
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map