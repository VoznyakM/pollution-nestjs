import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateStatsDto } from './dto/create-stats.dto';
import { StatsService } from './stats.service';
import { Stats } from './stats.entity';

@Controller('stats')
export class StatsController {
  constructor  (private statsService: StatsService) {}

  @Get()
  getDailyStats() {
    return this.statsService.getStats();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createStats(
    @Body() createStatsDto: CreateStatsDto
  ): Promise<Stats> {
    return this.statsService.createStats(createStatsDto);
  }

}