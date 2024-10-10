import { Paciente } from 'src/paciente/paciente.entity';
import { Proveedor } from 'src/proveedor/proveedor.entity';
import { sucursalProducto } from 'src/sucursal_prod/sucursal_prod.entity';
import { Trabajador } from 'src/trabajador/trabajador.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';

@Entity()
export class Sucursal {
  @PrimaryGeneratedColumn()
  id_sucursal: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 200 })
  direccion: string;

  @Column()
  telefono: number;

  @ManyToOne(() => Proveedor)
  proveedor: Proveedor; 

  @ManyToOne(() => Trabajador)
  trabajador: Trabajador; 

  @OneToMany(() => sucursalProducto, sucursalproducto => sucursalproducto.sucursal)
  sucursalproductos: sucursalProducto[];

  @OneToMany(() => Paciente, paciente => paciente.sucursal)
  pacientes: Paciente[];

  

}