import { ProductoService } from './producto.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [ProductoService],
})
export class ProductoModule {}
