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
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
let GetAuthorArgs = class GetAuthorArgs {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetAuthorArgs.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: '' }),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], GetAuthorArgs.prototype, "lastName", void 0);
GetAuthorArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetAuthorArgs);
exports.default = GetAuthorArgs;
//# sourceMappingURL=get-author.args.js.map