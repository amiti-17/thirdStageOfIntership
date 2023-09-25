import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
export declare class LocationsService {
    create(createLocationInput: CreateLocationInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLocationInput: UpdateLocationInput): string;
    remove(id: number): string;
}
