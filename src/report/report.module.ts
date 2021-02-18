import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { ReportRepository } from './report.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportRepository]),
  ],
 controllers: [ReportController],
 providers: [ReportService],
})

export class ReportModule {
}
