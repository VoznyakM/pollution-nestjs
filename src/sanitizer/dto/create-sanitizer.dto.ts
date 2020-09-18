import { IsNotEmpty } from 'class-validator';

export class CreateSanitizerDto {

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;

}