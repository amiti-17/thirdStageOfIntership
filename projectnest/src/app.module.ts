import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, PrismaService } from './app.service';
import { UserService } from './user/user.service';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  // imports: [
  //   GraphQLModule.forRoot<ApolloDriverConfig>({
  //     autoSchemaFile: 'schema.gql',
  //     driver: ApolloDriver,
  //   }),
  // ],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService],
  imports: [AuthModule, UserModule],
})
export class AppModule {}
