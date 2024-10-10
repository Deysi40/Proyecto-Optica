
import { Sucursal } from 'src/sucursal/sucursal.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Trabajador {
  @PrimaryGeneratedColumn()
  id_trabajador: number;

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

  @Column({ length: 100 })
  puesto: string;

  @OneToMany(() => Sucursal, sucursal => sucursal.trabajador)
  sucursales: Sucursal[];
}