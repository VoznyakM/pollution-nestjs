import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { ReportRepository } from './report.repository';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {

  constructor(
     @InjectRepository(ReportRepository)
     private reportRepository: ReportRepository
  ) {}

  async getReports(): Promise<Report[]> {
    return this.reportRepository.getReport();
  }

  async getReport(region: string): Promise<Report> {
    const found = await this.reportRepository.findOne({ where: { region } }); 
    
    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async createReport(createReportDto: CreateReportDto): Promise<Report> {
    return this.reportRepository.createReport(createReportDto);
  }

  async updateReport(region: string, updateReportDto: UpdateReportDto): Promise<Report> {
    const report = await this.getReport(region);
    report.description = updateReportDto.description;
    report.lat = updateReportDto.lat;
    report.lng = updateReportDto.lng;
    report.level = updateReportDto.level;
    await report.save();
    return report;
  }


}
