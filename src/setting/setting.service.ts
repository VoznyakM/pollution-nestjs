import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Setting } from './setting.entity';
import { SettingRepository } from './setting.repository';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingService {

  constructor(
     @InjectRepository(SettingRepository)
     private settingRepository: SettingRepository
  ) {}

  async getSettings(): Promise<Setting[]> {
    return this.settingRepository.getSetting();
  }

  async getSetting(name: string): Promise<Setting> {
    const found = await this.settingRepository.findOne({ where: { name } }); 
    
    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async createSetting(createSettingDto: CreateSettingDto): Promise<Setting> {
    return this.settingRepository.createSetting(createSettingDto);
  }

  async updateSetting(name: string, updateSettingDto: UpdateSettingDto): Promise<Setting> {
    const setting = await this.getSetting(name);
    setting.name = updateSettingDto.name;
    setting.value = updateSettingDto.value;
    await setting.save();
    return setting;
  }


}
