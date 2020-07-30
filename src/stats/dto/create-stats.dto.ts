import { IsNotEmpty } from 'class-validator';

export class CreateStatsDto {
  @IsNotEmpty()
  date: Date;

  cases: number;
  deaths: number;
  recovered: number;
}