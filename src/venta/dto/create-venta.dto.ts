import { IsNumber, IsString, IsOptional, IsNotEmpty, IsDate, IsDecimal } from 'class-validator';

export class CreateVentaDto {
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;

  @IsNumber()
  @IsDecimal()
  @IsNotEmpty()
  precio_unitario: number;

  @IsNumber()
  @IsDecimal()
  @IsNotEmpty()
  total_venta: number;

  @IsString()
  @IsNotEmpty()
  metodo_pago: string;

  @IsOptional()
  @IsString()
  nota?: string;

  //@IsDate()
  //@Type(() => Date)
  //@IsOptional()
  //fecha_venta?: Date;

}
