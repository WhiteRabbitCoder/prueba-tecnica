import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductoDto {
    @IsString({ message: 'El nombre debe ser un texto' }) // Validación de tipo
    nombre: string;

    @IsNumber({}, { message: 'El precio debe ser un número' }) // Validación de tipo
    precio: number;

    @IsString({ message: 'La descripción debe ser un texto' })
    descripcion: string;
}

export class UpdateProductoDto {
    @IsOptional() // Campo opcional
    @IsString({ message: 'El nombre debe ser un texto' })
    nombre?: string;

    @IsOptional()
    @IsNumber({}, { message: 'El precio debe ser un número' })
    precio?: number;

    @IsOptional()
    @IsString({ message: 'La descripción debe ser un texto' })
    descripcion?: string;
}
