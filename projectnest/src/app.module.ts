import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    LocationsModule,
  ],
  providers: [PrismaService],
  // controllers: [AppController],
  // providers: [AppService, PrismaService],
})
export class AppModule {}
