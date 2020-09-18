import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sanitizer } from './sanitizer.entity';
import { SanitizerRepository } from './sanitizer.repository';
import { CreateSanitizerDto } from './dto/create-sanitizer.dto';
import { UpdateSanitizerDto } from './dto/update-sanitizer.dto';

@Injectable()
export class SanitizerService {

  constructor(
     @InjectRepository(SanitizerRepository)
     private sanitizerRepository: SanitizerRepository
  ) {}

  async getSanitizers(): Promise<Sanitizer[]> {
    return this.sanitizerRepository.getSanitizer();
  }

  async getSanitizer(id: number): Promise<Sanitizer> {
    const found = await this.sanitizerRepository.findOne(id); 
    
    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async createSanitizer(createSanitizerDto: CreateSanitizerDto): Promise<Sanitizer> {
    return this.sanitizerRepository.createSanitizer(createSanitizerDto);
  }

  async updateSanitizer(id: number, updateSanitizerDto: UpdateSanitizerDto): Promise<Sanitizer> {
    const sanitizer = await this.getSanitizer(id);
    sanitizer.title = updateSanitizerDto.title;
    sanitizer.lat = updateSanitizerDto.lat;
    sanitizer.lng = updateSanitizerDto.lng;
    await sanitizer.save();
    return sanitizer;
  }


}
