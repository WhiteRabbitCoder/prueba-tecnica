import { NotFoundException, Body, Controller, Get, Param, Post, Delete, Put, ValidationPipe, UsePipes } from "@nestjs/common";
import { ProductoService } from "./producto.service";
import { CreateProductoDto, UpdateProductoDto } from "./dto/producto.dto";

@UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true })) // Aplica validación global
@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) { }

    @Get() // Obtener todos los productos
    async findAllProducts() {
        return this.productoService.findAllProducts();
    }

    @Post() // Crear un nuevo producto
    async createProduct(@Body() data: CreateProductoDto) {
        return this.productoService.createProduct(data);
    }

    @Get(':id') // Obtener un producto por ID
    async findProductById(@Param('id') id: string) {
        const productFound = await this.productoService.findProductById(id);
        if (!productFound) throw new NotFoundException('Producto no encontrado');
        return productFound;
    }

    @Delete(':id') // Eliminar un producto por ID
    async deleteProduct(@Param('id') id: string) {
        try {
            return await this.productoService.deteleProduct(id);
        } catch (error) {
            throw new NotFoundException('El producto no puede ser eliminado debido a que no existe.');
        }
    }

    @Put(':id') // Actualizar un producto por ID
    async updateProducto(@Param('id') id: string, @Body() data: UpdateProductoDto) {
        try {
            return await this.productoService.updateProduct(id, data);
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar porque el producto no existe.');
        }
    }

}
