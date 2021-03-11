import { IsNotEmpty } from 'class-validator';

export class CreateAreaDto {

  // @IsNotEmpty()
  title: string;

  // @IsNotEmpty()
  region: string;

  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;

  // @IsNotEmpty()
  radius: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  address: string;

  phone: string;

  @IsNotEmpty()
  level: number;  
}