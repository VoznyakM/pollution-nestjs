import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingService } from './setting.service';
import { Setting } from './setting.entity';

@Controller('setting')
export class SettingController {
  constructor  (private settingService: SettingService) {}

  @Get()
  getSettings() {
    return this.settingService.getSettings();
  }

  @Get('/:name')
  getSetting(
    @Param('name') name: string
  ) {
    return this.settingService.getSetting(name);    
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSetting(
    @Body() createSettingDto: CreateSettingDto
  ): Promise<Setting> {
    return this.settingService.createSetting(createSettingDto);
  }

  @Patch('/:name')
  updateSetting(
    @Param('name') name: string, 
    @Body() updateSettingDto: UpdateSettingDto,
  ): Promise<Setting> {
    return this.settingService.updateSetting(name, updateSettingDto);
  }

}