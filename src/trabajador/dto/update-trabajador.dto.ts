import { IsString, IsOptional, IsEmail, IsDate, IsNumber, Length } from 'class-validator';

export class UpdateTrabajadorDto {

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

  @IsString()
  @IsOptional()
  @Length(1, 100)
  puesto?: string;
}
