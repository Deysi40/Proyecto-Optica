import { Producto } from 'src/producto/producto.entity';
import { Sucursal } from 'src/sucursal/sucursal.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class sucursalProducto {

  @PrimaryGeneratedColumn()
  id_sucursalProducto: number;

  @Column()
  cantidad: number;

  @ManyToOne(() => Sucursal)
  sucursal: Sucursal;

  @ManyToOne(() => Producto)
  producto: Producto;

}