import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { LocationsModule } from './locations/locations.module';
import { AuthModule } from './auth/auth.module';
import { WeathersModule } from './weathers/weathers.module';
import { DaysWModule } from './daysW/daysW.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': {
          path: '/subscriptions',
        },
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    LocationsModule,
    AuthModule,
    WeathersModule,
    DaysWModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
