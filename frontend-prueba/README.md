# Frontend de Gestión de Productos

Este frontend permite gestionar productos mediante una interfaz en **Next.js** con operaciones CRUD, consumiendo una API en **NestJS**.

## Instalación

Clona el repositorio y ejecuta:

```sh
npm install
```

## Ejecución

```sh
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

## Páginas

### Listar productos
```http
GET /products
```
Muestra una tabla con todos los productos y opciones para ver detalles, editar o eliminar.

### Crear un producto
```http
GET /products/create
```
Formulario para añadir un nuevo producto.

#### Campos del formulario
- `Nombre`: Texto obligatorio.
- `Precio`: Número obligatorio.
- `Descripción`: Texto opcional.

Al guardar, el producto se envía a la API y se redirige a la lista de productos.

### Ver detalles de un producto
```http
GET /products/:id
```
Muestra la información de un producto con opciones para **editar** o **eliminar**.

### Editar un producto
```http
GET /products/:id/edit
```
Formulario con los datos actuales del producto, permitiendo su modificación.

### Eliminar un producto
```http
GET /products/:id/delete
```
Confirma la eliminación y redirige a la lista de productos tras completarse.

## Tecnologías

- Next.js
- HeroUI
- TypeScript
