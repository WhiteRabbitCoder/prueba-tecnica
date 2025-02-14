import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Producto } from "@prisma/client";
import { CreateProductoDto, UpdateProductoDto } from "./dto/producto.dto";

@Injectable()
export class ProductoService {
    constructor(private prisma: PrismaService) { }

    async findAllProducts(): Promise<Producto[]> {
        return this.prisma.producto.findMany(); // Obtener todos los productos
    }

    async findProductById(id: string): Promise<Producto | null> {
        return this.prisma.producto.findUnique({
            where: { id: id } // Buscar producto por ID
        });
    }

    async createProduct(data: CreateProductoDto): Promise<Producto> {
        return this.prisma.producto.create({
            data // Crear un nuevo producto
        });
    }

    async updateProduct(id: string, data: UpdateProductoDto): Promise<Producto> {
        return this.prisma.producto.update({
            where: { id: id }, // Buscar producto por ID
            data // Actualizar datos del producto
        });
    }

    async deteleProduct(id: string): Promise<Producto> {
        return this.prisma.producto.delete({
            where: { id: id } // Eliminar producto por ID
        });
    }
}
