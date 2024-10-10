import { Sucursal_prodModule } from './sucursal_prod/sucursal_prod.module';
import { Sucursal_prodController } from './sucursal_prod/sucursal_prod.controller';
import { SucursalModule } from './sucursal/sucursal.module';
import { SucursalController } from './sucursal/sucursal.controller';
import { VentaModule } from './venta/venta.module';
import { VentaController } from './venta/venta.controller';
import { ConsultaModule } from './consulta/consulta.module';
import { ConsultaController } from './consulta/consulta.controller';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { TrabajadorController } from './trabajador/trabajador.controller';
import { ProductoModule } from './producto/producto.module';
import { ProductoController } from './producto/producto.controller';
import { PacienteModule } from './paciente/paciente.module';
import { PacienteController } from './paciente/paciente.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioController } from './usuario/usuario.controller';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ProveedorController } from './proveedor/proveedor.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    Sucursal_prodModule,
    SucursalModule,
    VentaModule,
    ConsultaModule,
    TrabajadorModule,
    ProductoModule,
    PacienteModule,
    UsuarioModule,
    ProveedorModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lopez40.',
      database: 'lussendb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [
    Sucursal_prodController,
    SucursalController,
    VentaController,
    ConsultaController,
    TrabajadorController,
    ProductoController,
    PacienteController,
    UsuarioController,
    ProveedorController,
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
