import { LocationsService } from './locations.service';
import { CreateLocationInput } from './dto/create-location.input';
import { FindOneByCoordinatesInput } from './dto/find-one-by-coordinates.input';
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
    findOneByCoordinates(coordinates: FindOneByCoordinatesInput, context: any): Promise<{
        id: number;
        createdAt: number;
        updatedAt: number;
        lat: number;
        lon: number;
    }>;
    removeLocation(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }>;
}
