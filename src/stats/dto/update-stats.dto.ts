import { IsNotEmpty } from 'class-validator';

export class UpdateStatsDto {
  cases: number;
  deaths: number;
  recovered: number;
}