import { LocationsService } from './locations.service';
import { CreateLocationInput } from './dto/createLocation.input';
import { FindOneByCoordinatesInput } from './dto/findOneByCoordinates.input';
import { UpdateUserLocationInput } from './dto/updateUserLocation.input';
export declare class LocationsResolver {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    createLocation(createLocationInput: CreateLocationInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }>;
    findOneByCoordinates(coordinates: FindOneByCoordinatesInput): Promise<{
        id: number;
        createdAt: number;
        updatedAt: number;
        lat: number;
        lon: number;
    }>;
    updateUserLocationInput(updateUserLocationInput: UpdateUserLocationInput): Promise<globalThis.Location>;
    removeLocation(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }>;
}
