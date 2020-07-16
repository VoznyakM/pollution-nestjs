import { Module } from '@nestjs/common';
import { StatsModule } from "./stats/stats.module";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
