import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, PrismaService } from './app.service';
import { UserService } from './dataBase/user.service';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  // imports: [
  //   GraphQLModule.forRoot<ApolloDriverConfig>({
  //     autoSchemaFile: 'schema.gql',
  //     driver: ApolloDriver,
  //   }),
  // ],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
