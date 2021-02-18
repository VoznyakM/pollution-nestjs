import { IsNotEmpty } from 'class-validator';

export class UpdateReportDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;

  @IsNotEmpty()
  level: number;
}