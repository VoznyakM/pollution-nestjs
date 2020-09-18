import { Repository, EntityRepository } from "typeorm";
import { CreateSanitizerDto } from './dto/create-sanitizer.dto';
import { Sanitizer } from './sanitizer.entity';

@EntityRepository(Sanitizer)
export class SanitizerRepository extends Repository<Sanitizer> {
  async getSanitizer(): Promise<Sanitizer[]> {
    const query = this.createQueryBuilder('Sanitizer');
    // query.where('Sanitizer.date = :date', { date: new Date().toISOString().split('T')[0] })
    const sanitizer = await query.getMany();
    return sanitizer;
  }

  async createSanitizer(createSanitizerDto: CreateSanitizerDto): Promise<Sanitizer> {
    const { title, lat, lng } = createSanitizerDto;
    const sanitizer = new Sanitizer();
    sanitizer.title = title;
    sanitizer.lat = lat;
    sanitizer.lng = lng;
    await sanitizer.save();

    return sanitizer;
  } 

}
