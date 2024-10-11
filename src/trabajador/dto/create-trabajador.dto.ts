import { IsString, IsNotEmpty, IsEmail, IsNumber, IsOptional, Length, IsDateString, IsIn } from 'class-validator';

export class CreateTrabajadorDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  primer_nombre: string;

  @IsString()
  @IsOptional()
  @Length(1, 20)
  segundo_nombre?: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  primer_apellido: string;

  @IsString()
  @IsOptional()
  @Length(1, 20)
  segundo_apellido?: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_nac: Date;

  @IsIn(['men','women','kid','unisex'])
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  direccion: string;

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 300)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  puesto: string;
}
