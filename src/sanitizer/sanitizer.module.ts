import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SanitizerController } from './sanitizer.controller';
import { SanitizerService } from './sanitizer.service';
import { SanitizerRepository } from './sanitizer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SanitizerRepository]),
  ],
 controllers: [SanitizerController],
 providers: [SanitizerService],
})

export class SanitizerModule {
}
