import { Repository, EntityRepository } from "typeorm";
import { Stats } from './stats.enitity';

@EntityRepository(Stats)
export class StatsRepository extends Repository<Stats> {
  async getStats(): Promise<Stats[]> {
    const query = this.createQueryBuilder('stats');
    query.where('stats.date = :date', { date: new Date() })
    const stats = await query.getMany();
    return stats;
  }
}
