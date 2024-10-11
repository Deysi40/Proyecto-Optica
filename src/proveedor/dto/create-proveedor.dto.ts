import { IsString, IsNotEmpty, IsNumber, IsEmail, IsOptional, MaxLength } from 'class-validator';

export class CreateProveedorDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    direccion: string;

    @IsNumber()
    @IsNotEmpty()
    telefono: number;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(300)
    email: string;

}
