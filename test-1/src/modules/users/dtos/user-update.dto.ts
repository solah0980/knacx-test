import { IsNumber, IsString, Length } from 'class-validator';
import { AddressCreateDto } from 'src/modules/address/dtos/address-create.dto';
import { AddressUpdateDto } from 'src/modules/address/dtos/address-update.dto';
import { HistoryTakingCreateDto } from 'src/modules/history-taking/dtos/history-taking-create.dto';
import { HistoryTakingUpdateDto } from 'src/modules/history-taking/dtos/history-taking-update.dto';

export class UserUpdateDto {
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

  address: AddressUpdateDto;

  historyTaking: HistoryTakingUpdateDto;
}
