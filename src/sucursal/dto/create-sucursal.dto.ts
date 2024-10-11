import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSucursalDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

}
