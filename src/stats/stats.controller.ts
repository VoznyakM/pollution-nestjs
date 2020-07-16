import { Controller, Get, Body, Param, Query } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor  (private statsService: StatsService) {}

  @Get()
  getDailyStats() {
    return this.statsService.getStats();
  }
}