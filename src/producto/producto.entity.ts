import { sucursalProducto } from 'src/sucursal_prod/sucursal_prod.entity';
import { Venta } from 'src/venta/venta.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column('varchar', { length: 100, unique: true })
  titulo: string;

  @Column({ type:'varchar' })
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column('int', {  default: 0})
  stock: number;

  @OneToMany(() => Venta, venta => venta.producto)
  ventas: Venta[];

  @OneToMany(() => sucursalProducto, sucursalProd => sucursalProd.producto)
  sucursalesProd: sucursalProducto[];

}