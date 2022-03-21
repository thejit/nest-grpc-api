import { Module } from '@nestjs/common';
import { SummatorController } from './summator.controller';
import { SummatorService } from './summator.service';

@Module({
  imports: [],
  controllers: [SummatorController],
  providers: [SummatorService],
})
export class SummatorModule {}
