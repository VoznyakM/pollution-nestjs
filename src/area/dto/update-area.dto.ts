import { IsNotEmpty } from 'class-validator';

export class UpdateAreaDto {

  title: string;
  lat: number;
  lng: number;
  radius: number;
  description: string;
  address: string;
  phone: string;
  level: number;  

}