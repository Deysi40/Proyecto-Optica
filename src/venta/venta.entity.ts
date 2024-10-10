import { Paciente } from 'src/paciente/paciente.entity';
import { Producto } from 'src/producto/producto.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';


@Entity()
export class Venta {
  @PrimaryGeneratedColumn()
  id_venta: number;

  @Column()
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total_venta: number;

  @Column({ length: 30 })
  metodo_pago: String;

  @Column({ type:'varchar' })
  nota: String;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'}) //timestamp, autogenerador
  fecha_venta: Date;j

  @ManyToOne(() => Producto)
  producto: Producto;

  @ManyToOne(() => Paciente)
  paciente: Paciente;

  @ManyToOne(() => Usuario)
  usuario: Usuario;

}


