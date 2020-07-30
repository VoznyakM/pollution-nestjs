import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stats } from './stats.entity';
import { CreateStatsDto } from './dto/create-stats.dto';
import { StatsRepository } from './stats.repository';

@Injectable()
export class StatsService {

  constructor(
     @InjectRepository(StatsRepository)
     private statsRepository: StatsRepository
  ) {}

  async getStats(): Promise<Stats[]> {
    return this.statsRepository.getStats();
  }

  async createStats(createStatsDto: CreateStatsDto): Promise<Stats> {
    return this.statsRepository.createStats(createStatsDto);
  }

}
