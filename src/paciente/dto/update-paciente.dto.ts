import { IsString, IsOptional, IsEmail, IsNumber, IsDateString, Length } from 'class-validator';

export class UpdatePacienteDto {

  @IsString()
  @IsOptional()
  @Length(1, 200)
  direccion?: string;

  @IsNumber()
  @IsOptional()
  telefono?: number;

  @IsEmail()
  @IsOptional()
  @Length(1, 300)
  email?: string;

}
