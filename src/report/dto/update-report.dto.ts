import { IsNotEmpty } from 'class-validator';

export class UpdateReportDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  level: number;
  
  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;

}