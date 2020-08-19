import { Repository, EntityRepository } from "typeorm";
import { CreateStatsDto } from './dto/create-stats.dto';
import { Stats } from './stats.entity';

@EntityRepository(Stats)
export class StatsRepository extends Repository<Stats> {
  async getStats(): Promise<Stats[]> {
    const query = this.createQueryBuilder('stats');
    query.where('stats.date = :date', { date: new Date().toISOString().split('T')[0] })
    const stats = await query.getMany();
    return stats;
  }

  async createStats(createStatsDto: CreateStatsDto): Promise<Stats> {
    const { date, cases, deaths, recovered } = createStatsDto;

    const stats = new Stats();
    stats.date = date;
    stats.cases = cases;
    stats.deaths = deaths;
    stats.recovered = recovered;
    await stats.save();

    return stats;
  } 

}
