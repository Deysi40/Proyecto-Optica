import { PartialType } from '@nestjs/mapped-types';
import { CreateSucursalProductoDto } from './create-sucursal-prod.dto';

export class UpdateSucursalProductoDto extends PartialType(CreateSucursalProductoDto) {}