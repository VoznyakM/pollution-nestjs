import { Module } from '@nestjs/common';
import { StatsModule } from "./stats/stats.module";
import { AreaModule } from "./area/area.module";
import { SanitizerModule } from "./sanitizer/sanitizer.module";
import { SettingModule } from "./setting/setting.module";
import { ReportModule } from "./report/report.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    StatsModule, AreaModule, ReportModule, SettingModule, SanitizerModule],
})
export class AppModule {}
