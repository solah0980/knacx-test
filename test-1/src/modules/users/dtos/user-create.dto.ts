import { IsNumber, IsString, Length } from 'class-validator';
import { AddressCreateDto } from 'src/modules/address/dtos/address-create.dto';
import { HistoryTakingCreateDto } from 'src/modules/history-taking/dtos/history-taking-create.dto';

export class UserCreateDto {
  @IsString()
  title: string;

  @IsString()
  @Length(13)
  citizenId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  gender: string;

  @IsString()
  dateOfBirth: Date;

  @IsNumber()
  weight: number;

  @IsNumber()
  height: number;

  @IsString()
  @Length(10)
  phone: string;

  address: AddressCreateDto;

  historyTaking: HistoryTakingCreateDto;
}
