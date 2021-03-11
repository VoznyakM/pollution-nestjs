import { Repository, EntityRepository } from "typeorm";
import { CreateAreaDto } from './dto/create-area.dto';
import { Area } from './area.entity';

@EntityRepository(Area)
export class AreaRepository extends Repository<Area> {
  async getArea(): Promise<Area[]> {
    const query = this.createQueryBuilder('Area');
    // query.where('Area.date = :date', { date: new Date().toISOString().split('T')[0] })
    const area = await query.getMany();
    return area;
  }

  async createArea(createAreaDto: CreateAreaDto): Promise<Area> {
    const { title, region, lat, lng, radius, description, address, phone, level } = createAreaDto;
    const area = new Area();
    area.title = title;
    area.region = region;
    area.lat = lat;
    area.lng = lng; 
    area.description = description;
    area.address = address;
    area.phone = phone;
    area.level = level;
    area.radius = 50; // radius ? radius : 50;
    await area.save();

    return area;
  } 

}
