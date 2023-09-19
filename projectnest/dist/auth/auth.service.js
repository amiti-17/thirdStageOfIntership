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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("../user/user.controller");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userController, jwtService) {
        this.userController = userController;
        this.jwtService = jwtService;
    }
    async signIn(email, pass) {
        const user = await this.userController.findOne(email);
        if (user.password !== pass)
            throw new common_1.UnauthorizedException();
        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_controller_1.UserController,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map