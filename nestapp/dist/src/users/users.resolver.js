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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const create_user_input_1 = require("./dto/create-user.input");
const update_user_input_1 = require("./dto/update-user.input");
const safe_user_entity_1 = require("./entities/safe-user.entity");
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UsersResolver = class UsersResolver {
    constructor(usersService, usersController) {
        this.usersService = usersService;
        this.usersController = usersController;
    }
    async createUser(createUserInput) {
        return await this.usersService.create(createUserInput);
    }
    async findAll() {
        return await this.usersController.getAllUsers();
    }
    async findOne(email) {
        return await this.usersService.findOne(email);
    }
    async findById(id) {
        return await this.usersService.findById(id);
    }
    async findOneUnsafe(email) {
        return await this.usersService.findOneUnsafe(email);
    }
    async updateUser(updateUserInput) {
        return await this.usersService.update(updateUserInput.id, updateUserInput);
    }
    async removeUser(id) {
        return await this.usersService.remove(id);
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => safe_user_entity_1.SafeUser),
    __param(0, (0, graphql_1.Args)('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Query)(() => [safe_user_entity_1.SafeUser], { name: 'users' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => safe_user_entity_1.SafeUser, { name: 'user' }),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => safe_user_entity_1.SafeUser, { name: 'findById' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findById", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: 'userUnsafe' }),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findOneUnsafe", null);
__decorate([
    (0, graphql_1.Mutation)(() => safe_user_entity_1.SafeUser),
    __param(0, (0, graphql_1.Args)('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_input_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => safe_user_entity_1.SafeUser),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "removeUser", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => safe_user_entity_1.SafeUser),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        users_controller_1.UsersController])
], UsersResolver);
//# sourceMappingURL=users.resolver.js.map