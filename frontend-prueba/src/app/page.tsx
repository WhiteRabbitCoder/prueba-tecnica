"use client";

import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Gestión de Productos</h1>
      <p className="text-lg text-gray-600 mt-2">
        Administra productos fácilmente con este sistema de gestión.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="shadow-md border rounded-xl p-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">Ver Productos</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-700">
              Consulta la lista de productos disponibles, edítalos o elimínalos.
            </p>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/products" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Ir a Productos
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md border rounded-xl p-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">Agregar Producto</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-700">
              Crea un nuevo producto con nombre, precio y descripción.
            </p>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/products/create" className="bg-green-600 hover:bg-green-700 text-white w-full">
              Crear Producto
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
