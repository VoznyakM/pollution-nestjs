import { IsNotEmpty } from 'class-validator';

export class CreateSettingDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  value: string;

}