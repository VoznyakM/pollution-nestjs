import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stats } from './stats.entity';
import { CreateStatsDto } from './dto/create-stats.dto';
import { StatsRepository } from './stats.repository';
import { UpdateStatsDto } from './dto/update-stats.dto';

@Injectable()
export class StatsService {

  constructor(
     @InjectRepository(StatsRepository)
     private statsRepository: StatsRepository
  ) {}

  async getStats(): Promise<Stats[]> {
    return this.statsRepository.getStats();
  }

  async getStatsByDate(date: Date): Promise<Stats> {
    const found = await this.statsRepository.findOne({ where: { date } });

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async createStats(createStatsDto: CreateStatsDto): Promise<Stats> {
    return this.statsRepository.createStats(createStatsDto);
  }

  async updateStats(date: Date, updateStatsDto: UpdateStatsDto): Promise<Stats> {
    const stats = await this.getStatsByDate(date);
    stats.cases = updateStatsDto.cases;
    await stats.save();
    return stats;
  }


}
