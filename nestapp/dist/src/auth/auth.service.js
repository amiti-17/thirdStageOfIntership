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
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService, prisma, usersServices) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.usersServices = usersServices;
    }
    async validateUser(email, password) {
        const user = await this.usersServices.findOneUnsafe(email);
        if (user && user.password === password) {
            const { password, ...safeUser } = user;
            return safeUser;
        }
        throw new common_1.UnauthorizedException();
    }
    async login(user) {
        return {
            status: true,
        };
    }
    async signup(createUserInput) {
        const user = await this.usersServices.findOne(createUserInput.email);
        if (user)
            throw new Error('User already exists');
        return await this.usersServices.create({
            ...createUserInput,
        });
    }
    async refreshToken(context) {
        return { status: true };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map