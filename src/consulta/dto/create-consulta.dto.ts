import { IsNotEmpty, IsString } from 'class-validator';


export class CreateConsultaDto {
  
  @IsNotEmpty()
  @IsString()
  motivo_consulta: string;

  @IsNotEmpty()
  @IsString()
  servicio: string;

}
