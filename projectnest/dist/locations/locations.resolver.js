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
const create_location_input_1 = require("./dto/create-location.input");
const find_one_by_coordinates_input_1 = require("./dto/find-one-by-coordinates.input");
let LocationsResolver = class LocationsResolver {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    createLocation(createLocationInput) {
        return this.locationsService.create(createLocationInput);
    }
    findAll() {
        return this.locationsService.findAll();
    }
    findOne(id) {
        return this.locationsService.findOne(id);
    }
    findOneByCoordinates(coordinates) {
        return this.locationsService.findOneByCoordinates(coordinates);
    }
    removeLocation(id) {
        return this.locationsService.remove(id);
    }
};
exports.LocationsResolver = LocationsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => location_entity_1.Location),
    __param(0, (0, graphql_1.Args)('createLocationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_location_input_1.CreateLocationInput]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "createLocation", null);
__decorate([
    (0, graphql_1.Query)(() => [location_entity_1.Location], { name: 'locations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => location_entity_1.Location, { name: 'locationById' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => location_entity_1.Location, { name: 'locationByCoordinates' }),
    __param(0, (0, graphql_1.Args)('coordinates')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_by_coordinates_input_1.FindOneByCoordinatesInput]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "findOneByCoordinates", null);
__decorate([
    (0, graphql_1.Mutation)(() => location_entity_1.Location),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "removeLocation", null);
exports.LocationsResolver = LocationsResolver = __decorate([
    (0, graphql_1.Resolver)(() => location_entity_1.Location),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsResolver);
//# sourceMappingURL=locations.resolver.js.map