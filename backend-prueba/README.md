# API de Productos

Esta API permite gestionar productos dentro de una base de datos con operaciones CRUD utilizando NestJS y Prisma.

## Instalación

Clona el repositorio y ejecuta:

```sh
npm install
```

Configura el archivo `.env` con las variables necesarias para la conexión a la base de datos.

## Ejecución

```sh
npm run start
```

## Endpoints

### Obtener todos los productos
```http
GET /producto
```

### Crear un producto
```http
POST /producto
Content-Type: application/json
```
#### Body:
```json
{
  "nombre": "Laptop",
  "precio": 1499.99,
  "descripcion": "Laptop con procesador i7 y RTX 3060"
}
```

### Obtener un producto por ID
```http
GET /producto/:id
```

### Actualizar un producto
```http
PUT /producto/:id
Content-Type: application/json
```
#### Body (Ejemplo):
```json
{
  "nombre": "Laptop Gaming"
}
```

### Eliminar un producto
```http
DELETE /producto/:id
```

## Validaciones

- `nombre`: Debe ser un `string`.
- `precio`: Debe ser un `número`.
- `descripcion`: Debe ser un `string`.

## Tecnologías

- NestJS
- Prisma
- PostgreSQL
