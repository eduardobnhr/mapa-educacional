/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsInt, IsDateString } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  sexo?: 'F' | 'M';

  @IsNotEmpty()
  @IsInt()
  id_cidade: number;

  @IsOptional()
  @IsInt()
  id_escola?: number;

  @IsOptional()
  @IsInt()
  pontos?: number;

  @IsNotEmpty()
  @IsDateString()
  dt_nasc: Date;
}
