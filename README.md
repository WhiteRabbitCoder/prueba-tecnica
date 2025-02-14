# Documentación del Proyecto de Productos

Este proyecto consiste en una aplicación web para la gestión de productos, con un backend desarrollado en NestJS y Prisma, y un frontend en Next.js con HeroUI.

---

## Backend

### Instalación

Clona el repositorio y ejecuta:

```sh
npm install
```

Configura el archivo `.env` con las variables necesarias para la conexión a la base de datos.

### Ejecución

```sh
npm run start
```

### Endpoints

#### Obtener todos los productos
```http
GET /producto
```

#### Crear un producto
```http
POST /producto
Content-Type: application/json
```
##### Body:
```json
{
  "nombre": "string",
  "precio": "number",
  "descripcion": "string"
}

```

#### Obtener un producto por ID
```http
GET /producto/:id
```

#### Actualizar un producto
```http
PUT /producto/:id
Content-Type: application/json
```
##### Body (Ejemplo):
```json
{
  "nombre": "Laptop Gaming"
}
```

#### Eliminar un producto
```http
DELETE /producto/:id
```

### Validaciones

- `nombre`: Debe ser un `string`.
- `precio`: Debe ser un `número`.
- `descripcion`: Debe ser un `string`.

### Tecnologías

- NestJS
- Prisma
- PostgreSQL

---

## Frontend

El frontend está desarrollado con Next.js y usa HeroUI para la interfaz de usuario.

### Instalación

Clona el repositorio y ejecuta:

```sh
npm install
```

### Ejecución

```sh
npm run dev
```

### Páginas

#### Listado de productos
**Ruta:** `/products`  
Muestra una tabla con todos los productos. Desde aquí se puede acceder a los detalles de cada producto, editarlo o eliminarlo.

#### Detalles de un producto
**Ruta:** `/products/[id]`  
Muestra la información detallada de un producto, incluyendo su nombre, precio, descripción y fechas de creación y actualización. Desde aquí se puede editar o eliminar el producto.

#### Crear un producto
**Ruta:** `/products/new`  
Formulario para agregar un nuevo producto. Al enviar el formulario, se muestra un mensaje de confirmación y se redirige al listado de productos.

#### Editar un producto
**Ruta:** `/products/[id]/edit`  
Formulario para modificar un producto existente. Al guardar los cambios, se muestra un mensaje de confirmación y se redirige a los detalles del producto.

#### Eliminar un producto
**Ruta:** `/products/[id]/delete`  
Página de confirmación para eliminar un producto. Si el usuario confirma, el producto se elimina y se muestra un mensaje antes de redirigir al listado de productos.

### Componentes principales

- **Tabla de productos:** Usa el componente `Table` de HeroUI.
- **Formulario de productos:** Usa `Input` y `Button` de HeroUI.
- **Tarjetas de detalles:** Usa `Card` de HeroUI.
- **Navegación:** Barra de navegación con enlaces a las secciones principales.

### Tecnologías

- Next.js
- TypeScript
- HeroUI
- Tailwind CSS

---

## Autor

Este proyecto fue desarrollado por Angelo Gaviria.
