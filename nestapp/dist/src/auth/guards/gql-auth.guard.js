"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
const authConstants_1 = require("../authConstants");
const regExp_1 = require("../../../config/system/regExp");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("../auth.service");
const jwtExpiresSecond = authConstants_1.authConstants.expiresTime.match(regExp_1.regExp.int)[0];
const HTTP_ONLY_COOKIE_ACCESS = {
    maxAge: Number(jwtExpiresSecond) * 1000,
    httpOnly: true,
    domain: authConstants_1.authConstants.domain,
};
const HTTP_ONLY_COOKIE_REFRESH = {
    maxAge: Number(jwtExpiresSecond) * 10000,
    httpOnly: true,
    domain: authConstants_1.authConstants.domain,
};
let GqlAuthGuard = class GqlAuthGuard extends (0, passport_1.AuthGuard)('local') {
    constructor(jwtService, authService) {
        super();
        this.jwtService = jwtService;
        this.authService = authService;
    }
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const request = ctx.getContext();
        request.body = ctx.getArgs().authLoginInput;
        console.log('gql auth guard cookies', request.cookies);
        return request;
    }
    handleRequest(err, user, info, context) {
        if (err || !user || info)
            throw err || new common_1.UnauthorizedException();
        const authContext = graphql_1.GqlExecutionContext.create(context);
        const { req } = authContext.getContext();
        const access_token = this.jwtService.sign({
            sub: user.id,
            name: user.name,
            email: user.email,
        }, {
            secret: authConstants_1.authConstants.access_secret,
            expiresIn: authConstants_1.authConstants.expiresTime,
        });
        const refresh_token = this.jwtService.sign({
            email: user.email,
        }, {
            secret: authConstants_1.authConstants.refresh_secret,
            expiresIn: `${Number(jwtExpiresSecond) * 10}s`,
        });
        req.res?.cookie('access_token', access_token, HTTP_ONLY_COOKIE_ACCESS);
        req.res?.cookie('refresh_token', refresh_token, HTTP_ONLY_COOKIE_REFRESH);
        return user;
    }
};
exports.GqlAuthGuard = GqlAuthGuard;
exports.GqlAuthGuard = GqlAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        auth_service_1.AuthService])
], GqlAuthGuard);
//# sourceMappingURL=gql-auth.guard.js.map