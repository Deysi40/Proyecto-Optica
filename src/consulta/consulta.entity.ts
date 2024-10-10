import { Paciente } from 'src/paciente/paciente.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  id_consulta: number;

  @Column('text')
  motivo_consulta: string;

  @Column({ length: 300 })
  servicio: string;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'}) //timestamp, autogenerador
  fecha_consulta: Date;

  @ManyToOne(() => Paciente)
  paciente: Paciente;

}