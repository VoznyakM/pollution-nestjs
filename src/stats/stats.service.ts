import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StatsService {

  // constructor(
  //   @InjectRepository(StatsRepository)
  //   private taskRepository: StatsRepository
  // ) {}

  async getStats(): Promise<Task[]> {
    // return this.statsRepository.getTasks(filterDto, user);
    return await json_encode("infected" => 145)
  }

}
