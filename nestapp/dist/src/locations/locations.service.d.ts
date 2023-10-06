import { CreateLocationInput } from './dto/createLocation.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneByCoordinatesInput } from './dto/findOneByCoordinates.input';
import { HttpService } from '@nestjs/axios';
import { UpdateUserLocationInput } from './dto/updateUserLocation.input';
export declare class LocationsService {
    private prisma;
    private httpService;
    constructor(prisma: PrismaService, httpService: HttpService);
    create(createLocationInput: CreateLocationInput): Promise<{
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
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }>;
    updateUserLocation(updateUserLocationInput: UpdateUserLocationInput): Promise<Location>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }>;
}
