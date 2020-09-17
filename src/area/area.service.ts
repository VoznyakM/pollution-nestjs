import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { AreaRepository } from './area.repository';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {

  constructor(
     @InjectRepository(AreaRepository)
     private areaRepository: AreaRepository
  ) {}

  async getAreas(): Promise<Area[]> {
    return this.areaRepository.getArea();
  }

  async getArea(region: string): Promise<Area> {
    const found = await this.areaRepository.findOne({ where: { region } }); 
    
    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async createArea(createAreaDto: CreateAreaDto): Promise<Area> {
    return this.areaRepository.createArea(createAreaDto);
  }

  async updateArea(region: string, updateAreaDto: UpdateAreaDto): Promise<Area> {
    const area = await this.getArea(region);
    area.title = updateAreaDto.title;
    area.lat = updateAreaDto.lat;
    area.lng = updateAreaDto.lng;
    area.radius = updateAreaDto.radius;
    await area.save();
    return area;
  }


}
