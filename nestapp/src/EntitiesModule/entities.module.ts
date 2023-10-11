import { Module } from '@nestjs/common';
import { Location } from './entities/location.entity';
import { SafeUser } from './entities/safe-user.entity';
import { User } from './entities/user.entity';

@Module({
  providers: [Location, SafeUser, User],
  exports: [Location, SafeUser, User],
})
export class EntitiesModule {}
