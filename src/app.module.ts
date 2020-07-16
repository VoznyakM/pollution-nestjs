import { Module } from '@nestjs/common';
import { StatsModule } from "./stats/stats.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    StatsModule],
})
export class AppModule {}
