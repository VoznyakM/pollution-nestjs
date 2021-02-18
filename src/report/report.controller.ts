import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportService } from './report.service';
import { Report } from './report.entity';

@Controller('report')
export class ReportController {
  constructor  (private reportService: ReportService) {}

  @Get()
  getReports() {
    return this.reportService.getReports();
  }

  @Get('/:region')
  getReport(
    @Param('region') region: string
  ) {
    return this.reportService.getReport(region);    
  }

  @Post()
  @UsePipes(ValidationPipe)
  createReport(
    @Body() createReportDto: CreateReportDto
  ): Promise<Report> {
    return this.reportService.createReport(createReportDto);
  }

  @Patch('/:id')
  updateReport(
    @Param('region') region: string, 
    @Body() updateReportDto: UpdateReportDto,
  ): Promise<Report> {
    return this.reportService.updateReport(region, updateReportDto);
  }

}