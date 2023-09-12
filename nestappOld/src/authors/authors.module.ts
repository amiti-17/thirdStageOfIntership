import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import AuthorsService from './authors.service';

@Module({
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
