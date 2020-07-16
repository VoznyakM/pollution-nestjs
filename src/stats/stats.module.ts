import { Module } from '@nestjs/common';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
// import { TaskRepository } from './task.repository';
@Module({
  imports: [
    //    TypeOrmModule.forFeature([TaskRepository]),
    //    AuthModule
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {
}
