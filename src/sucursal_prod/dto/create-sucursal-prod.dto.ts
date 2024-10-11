import { IsNotEmpty, IsNumber } from 'class-validator';


export class CreateSucursalProductoDto {
    @IsNotEmpty()
    @IsNumber()
    cantidad: number;
}
