import { Module } from '@nestjs/common';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [ProductoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
