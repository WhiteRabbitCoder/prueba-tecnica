import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers: [ProductoController], // Controlador que maneja las rutas de producto
    providers: [ProductoService], // Servicio con la lógica de negocio
    imports: [PrismaModule], // Importa Prisma para la conexión a la base de datos
})
export class ProductoModule { }
