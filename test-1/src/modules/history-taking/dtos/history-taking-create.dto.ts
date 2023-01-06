import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsString,
} from 'class-validator';

export class HistoryTakingCreateDto {
  @IsDate()
  covidCheckDate: Date;

  @IsString()
  covidResult: string;

  @IsBoolean()
  isVaccinated: boolean;

  @IsBoolean()
  isRegularDisease: boolean;

  @IsArray()
  regularDiseaseList?: string[];
}
