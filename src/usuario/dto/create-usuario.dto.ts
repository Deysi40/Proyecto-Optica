import { IsString, IsNotEmpty, IsEmail, IsNumber, IsOptional, Length, IsDateString, IsIn, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUsuarioDto {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La contraseña debe tener una letra mayúscula, una minúscula y un número'
    })
    password: string;

    @IsString()
    @MinLength(1)
    nombre: string;

}