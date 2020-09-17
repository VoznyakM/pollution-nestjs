import { IsNotEmpty } from 'class-validator';

export class UpdateSettingDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  value: string;
}