import { Module } from '@nestjs/common';
import { StatsModule } from "./stats/stats.module";
import { AreaModule } from "./area/area.module";
import { SettingModule } from "./setting/setting.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    StatsModule, AreaModule, SettingModule],
})
export class AppModule {}
