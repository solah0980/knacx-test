import { IsNumber, IsString } from 'class-validator';

export class AddressUpdateDto {
  @IsNumber()
  id: number;

  @IsString()
  no: string;

  @IsString()
  moo: string;

  @IsString()
  road?: string;

  @IsString()
  tambol: string;

  @IsString()
  amphure: string;

  @IsString()
  province: string;

  @IsString()
  zipCode: string;
}
