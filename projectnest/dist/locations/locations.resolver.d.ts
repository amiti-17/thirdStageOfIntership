import { LocationsService } from './locations.service';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
export declare class LocationsResolver {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    createLocation(createLocationInput: CreateLocationInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateLocation(updateLocationInput: UpdateLocationInput): string;
    removeLocation(id: number): string;
}
