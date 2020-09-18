import { IsNotEmpty } from 'class-validator';

export class UpdateSanitizerDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;

}