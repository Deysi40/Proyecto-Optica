import { Sucursal } from 'src/sucursal/sucursal.entity';
import { Entity, Column, PrimaryGeneratedColumn,  ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  id_proveedor: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 200 })
  direccion: string;

  @Column()
  telefono: number;

  @Column({ length: 100 })
  email: string;

  @OneToMany(() => Sucursal, sucursal => sucursal.proveedor)
  sucursales: Sucursal[];

}

