import { Repository, EntityRepository } from "typeorm";
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from './report.entity';

import { Area } from '../area/area.entity';
import { AreaRepository } from '../area/area.repository';
import { CreateAreaDto } from '../area/dto/create-area.dto';

@EntityRepository(Report)
export class ReportRepository extends Repository<Report> {
  async getReport(): Promise<Report[]> {
    const query = this.createQueryBuilder('Report');
    // query.where('Report.date = :date', { date: new Date().toISOString().split('T')[0] })
    const report = await query.orderBy('orig_date', 'DESC').getMany();
    return report;
  }

  async createReport(createReportDto: CreateReportDto): Promise<Report> {
    const { orig_date, id_str, source, description, address, avatar, author, lat, lng } = createReportDto;
    const report = new Report();
    report.description = description;
    report.address = address;
    report.lat = lat;
    report.lng = lng;
    report.avatar = avatar;
    report.author = author;
    report.orig_date = orig_date;
    report.id_str = id_str;
    report.source = source;
    await report.save();

/*
    var createAreaDto = new CreateAreaDto;
    createAreaDto.title = address;
    createAreaDto.lat = lat;
    createAreaDto.lng = lng;
    createAreaDto.radius = 50;
    var areaRepository = new AreaRepository;
    areaRepository.createArea(createAreaDto);
*/

    return report;
  } 

}
