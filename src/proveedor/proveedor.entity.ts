import { Sucursal } from 'src/sucursal/sucursal.entity';
import { Entity, Column, PrimaryGeneratedColumn,  ManyToOne, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';

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

  @Column('varchar', { length: 300, unique: true })
  email: string;

  @OneToMany(() => Sucursal, sucursal => sucursal.proveedor)
  sucursales: Sucursal[];

  @BeforeInsert()
  checkFieldsBeforeInsert() {
      this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
      this.checkFieldsBeforeInsert();   
  }

}

