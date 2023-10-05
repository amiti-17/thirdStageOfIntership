import { CreateLocationInput } from './dto/create-location.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneByCoordinatesInput } from './dto/find-one-by-coordinates.input';
import { HttpService } from '@nestjs/axios';
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
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        lat: number;
        lon: number;
    }>;
}
