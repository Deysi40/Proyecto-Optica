import { IsString, IsNotEmpty, IsNumber, IsOptional, IsDecimal, Min, MaxLength, MinLength, IsInt } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  titulo: string;

  @IsString()
  @IsOptional() 
  descripcion: string;

  @IsNumber()
  @IsDecimal()
  @IsNotEmpty() 
  precio: number;
  
  @IsInt()
  @Min(0)
  @IsOptional()
  stock?: number; 
}
