import { Venta } from 'src/venta/venta.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn('uuid')
    id_usuario: string;

  @Column({ length: 100 })
  nombre: string;

@Column('varchar', { length: 300, unique: true })
email: string;


@Column('text', {
    select: false
})
password: string;

@Column({ type: 'enum', enum: ['admin', 'user'], default: 'user' })
  rol: string;

@Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'}) //timestamp, autogenerador
fechaCreacion: Date;

@OneToMany(() => Venta, venta => venta.usuario)
ventas: Venta[];

  
}