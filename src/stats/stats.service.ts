import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StatsService {

  // constructor(
  //   @InjectRepository(StatsRepository)
  //   private taskRepository: StatsRepository
  // ) {}

  async getStats(): Promise<any> {
    // return this.statsRepository.getTasks(filterDto, user);
    return await {"infected": 147}
  }

}
