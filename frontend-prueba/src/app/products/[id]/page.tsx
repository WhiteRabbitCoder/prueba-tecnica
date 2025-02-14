"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";

// Definir tipo Producto
type Producto = {
    id: string;
    nombre: string;
    precio: number;
    descripcion: string;
    createdAt: string;
    updatedAt: string;
};

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const [producto, setProducto] = useState<Producto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://localhost:3001/producto/${id}`);
                if (!res.ok) throw new Error("Producto no encontrado");
                const data = await res.json();
                setProducto(data);
            } catch (err) {
                setError("Error al cargar el producto");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!producto) return <p className="text-center text-gray-500">Producto no encontrado</p>;

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md p-6 shadow-lg border rounded-xl">
                <CardHeader>
                    <h2 className="text-2xl font-bold">{producto.nombre}</h2>
                </CardHeader>
                <CardBody>
                    <p className="text-lg text-gray-700 font-semibold">Precio: <span className="text-green-600">${producto.precio.toFixed(2)}</span></p>
                    <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                    <p className="text-sm text-gray-500 mt-4">Creado en: {new Date(producto.createdAt).toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Última actualización: {new Date(producto.updatedAt).toLocaleString()}</p>
                </CardBody>
                <CardFooter>
                    <div className="flex justify-between mt-4 gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => router.push(`/products/${id}/edit`)}>Editar</Button>
                        <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => router.push(`/products/${id}/delete`)}>Eliminar</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
