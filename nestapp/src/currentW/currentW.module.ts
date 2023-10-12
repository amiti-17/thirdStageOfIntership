import { Module } from '@nestjs/common';
import { CurrentWService } from './currentW.service';
// import { JSONObjectScalar } from './JsonObjScalar';

@Module({
  providers: [CurrentWService],
  exports: [CurrentWService],
})
export class CurrentWModule {}
