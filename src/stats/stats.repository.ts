import { Repository, EntityRepository } from "typeorm";
import { Stats } from './stats.entity';

@EntityRepository(Stats)
export class StatsRepository extends Repository<Stats> {
  async getStats(): Promise<Stats[]> {
    const query = this.createQueryBuilder('stats');
    query.where('stats.date = :date', { date: new Date().toLocaleDateString() })
    const stats = await query.getMany();
    return stats;
  }
}
