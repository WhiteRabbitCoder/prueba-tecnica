"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import { Button } from "@heroui/button";

async function getProducts() {
    const res = await fetch("http://localhost:3001/producto", { cache: "no-store" });
    if (!res.ok) throw new Error("Error al obtener productos");
    return res.json();
}

export default function ProductsPage() {
    const router = useRouter();
    const [productos, setProductos] = useState<any[]>([]);

    useEffect(() => {
        getProducts().then(setProductos).catch(console.error);
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Lista de Productos</h1>
                <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push("/products/new")}>
                    Nuevo Producto
                </Button>
            </div>
            <Table aria-label="Tabla de productos">
                <TableHeader>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Precio</TableColumn>
                    <TableColumn>Acción</TableColumn>
                </TableHeader>
                <TableBody>
                    {productos.map((producto) => (
                        <TableRow key={producto.id} className="hover:bg-gray-300 text-sm text-black">
                            <TableCell>{producto.nombre}</TableCell>
                            <TableCell>${producto.precio.toFixed(2)}</TableCell>
                            <TableCell>
                                <Link href={`/products/${producto.id}`} className="text-blue-400 hover:underline">
                                    Ver detalles
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
