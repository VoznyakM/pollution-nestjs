import { IsNotEmpty } from 'class-validator';

export class UpdateAreaDto {
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

  @IsNotEmpty()
  level: number;  
}