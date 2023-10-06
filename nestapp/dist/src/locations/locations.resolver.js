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
exports.LocationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const locations_service_1 = require("./locations.service");
const location_entity_1 = require("./entities/location.entity");
const createLocation_input_1 = require("./dto/createLocation.input");
const findOneByCoordinates_input_1 = require("./dto/findOneByCoordinates.input");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const updateUserLocation_input_1 = require("./dto/updateUserLocation.input");
let LocationsResolver = class LocationsResolver {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    async createLocation(createLocationInput) {
        return await this.locationsService.create(createLocationInput);
    }
    async findAll() {
        return await this.locationsService.findAll();
    }
    async findOne(id) {
        return await this.locationsService.findOne(id);
    }
    async findOneByCoordinates(coordinates) {
        return {
            id: 0,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            lat: coordinates.lat,
            lon: coordinates.lon,
        };
    }
    async updateUserLocationInput(updateUserLocationInput) {
        return this.locationsService.updateUserLocation(updateUserLocationInput);
    }
    async removeLocation(id) {
        return await this.locationsService.remove(id);
    }
};
exports.LocationsResolver = LocationsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => location_entity_1.Location),
    __param(0, (0, graphql_1.Args)('createLocationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createLocation_input_1.CreateLocationInput]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "createLocation", null);
__decorate([
    (0, graphql_1.Query)(() => [location_entity_1.Location], { name: 'locations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => location_entity_1.Location, { name: 'locationById' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => location_entity_1.Location, { name: 'locationByCoordinates' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('coordinates')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneByCoordinates_input_1.FindOneByCoordinatesInput]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "findOneByCoordinates", null);
__decorate([
    (0, graphql_1.Mutation)(() => [location_entity_1.Location]),
    __param(0, (0, graphql_1.Args)('updateUserLocationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUserLocation_input_1.UpdateUserLocationInput]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "updateUserLocationInput", null);
__decorate([
    (0, graphql_1.Mutation)(() => location_entity_1.Location),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "removeLocation", null);
exports.LocationsResolver = LocationsResolver = __decorate([
    (0, graphql_1.Resolver)(() => location_entity_1.Location),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsResolver);
//# sourceMappingURL=locations.resolver.js.map