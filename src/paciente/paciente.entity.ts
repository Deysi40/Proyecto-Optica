import { Consulta } from 'src/consulta/consulta.entity';
import { Sucursal } from 'src/sucursal/sucursal.entity';
import { Venta } from 'src/venta/venta.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id_paciente: number;

  @Column({ length: 20 })
  primer_nombre: string;

  @Column({ length: 20 })
  segundo_nombre: string;

  @Column({ length: 20 })
  primer_apellido: string;

  @Column({ length: 20 })
  segundo_apellido: string;

  @Column()
  fecha_nac: Date;

  @Column({ length: 15 })
  genero: string;

  @Column({ length: 200 })
  direccion: string;

  @Column()
  telefono: number;

  @Column('varchar', { length: 300, unique: true })
  email: string;

  @ManyToOne(() => Sucursal)
  sucursal: Sucursal;
  
  @OneToMany(() => Venta, venta => venta.paciente)
  ventas: Venta[];

  @OneToMany(() => Consulta, consulta => consulta.paciente)
  consultas: Consulta[];
}
