import { IsNotEmpty } from 'class-validator';

export class CreateReportDto {

  @IsNotEmpty()
  description: string;

  address: string;
  id_str: string;
  source: string;
  avatar: string;
  author: string;
  orig_date: Date;
  lat: number;
  lng: number;

}