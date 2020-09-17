import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';
import { SettingRepository } from './setting.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SettingRepository]),
  ],
 controllers: [SettingController],
 providers: [SettingService],
})

export class SettingModule {
}
