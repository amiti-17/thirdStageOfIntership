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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserInput) {
        const { password, ...data } = await this.prisma.users.create({
            data: {
                ...createUserInput,
            },
        });
        return data;
    }
    async findAll() {
        return (await this.prisma.users.findMany()).map((user) => {
            const { password, ...data } = user;
            return data;
        });
    }
    async findOne(email) {
        const { password, ...data } = await this.prisma.users.findUnique({
            where: { email },
        });
        return data;
    }
    async findById(id) {
        const { password, ...safeUser } = await this.prisma.users.findUnique({
            where: { id },
        });
        return safeUser;
    }
    async getCurrentUser(context) {
        return await context.req.user;
    }
    async findOneUnsafe(email) {
        return await this.prisma.users.findUnique({ where: { email } });
    }
    async update(id, updateUserInput) {
        const { password, ...user } = await this.prisma.users.update({
            where: { id },
            data: { locations: updateUserInput },
        });
        return user;
    }
    async remove(id) {
        const { password, ...user } = await this.prisma.users.delete({
            where: { id },
        });
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map