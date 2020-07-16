import { Controller, Get, Body, Param, Query } from '@nestjs/common';

@Controller('stats')
export class StatsController {
  constructor  (private statsService: StatsService) {}

  @Get()
  getDailyStats() {
    return this.statsService.getStats();
  }
}