import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateStatsDto } from './dto/create-stats.dto';
import { UpdateStatsDto } from './dto/update-stats.dto';
import { StatsService } from './stats.service';
import { Stats } from './stats.entity';

@Controller('stats')
export class StatsController {
  constructor  (private statsService: StatsService) {}

  @Get()
  getDailyStats() {
    return this.statsService.getStats();
  }

  @Get('/:date')
  getStats(
    @Param('date') date: Date
  ) {
    return this.statsService.getStatsByDate(date);    
  }

  @Post()
  @UsePipes(ValidationPipe)
  createStats(
    @Body() createStatsDto: CreateStatsDto
  ): Promise<Stats> {
    return this.statsService.createStats(createStatsDto);
  }

  @Patch('/:date/info')
  updateStats(
    @Param('date') date: Date, 
    @Body() updateStatsDto: UpdateStatsDto,
  ): Promise<Stats> {
    return this.statsService.updateStats(date, updateStatsDto);
  }

}