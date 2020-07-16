import { Module } from '@nestjs/common';
import { StatsController } from './tasks.controller';
import { StatsService } from './tasks.service';
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
