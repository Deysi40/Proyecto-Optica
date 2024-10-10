import { PacienteService } from './paciente.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [PacienteService],
})
export class PacienteModule {}
