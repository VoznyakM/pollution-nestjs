import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stats } from './stats.enitity';
import { StatsRepository } from './stats.repository';

@Injectable()
export class StatsService {

  constructor(
     @InjectRepository(StatsRepository)
     private statsRepository: StatsRepository
  ) {}

  async getStats(): Promise<Stats[]> {
    return this.statsRepository.getStats();
    //return await {"infected": 147}
  }

}
