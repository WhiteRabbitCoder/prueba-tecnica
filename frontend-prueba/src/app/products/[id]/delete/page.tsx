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
};

export default function DeleteProductPage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const [producto, setProducto] = useState<Producto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [deleted, setDeleted] = useState(false);

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

    const handleDelete = async () => {
        setDeleting(true);
        try {
            const res = await fetch(`http://localhost:3001/producto/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Error al eliminar el producto");
            setDeleted(true);

            // Espera 2 segundos antes de redirigir
            setTimeout(() => {
                router.push("/products");
            }, 2000);
        } catch (err) {
            setError("No se pudo eliminar el producto");
        } finally {
            setDeleting(false);
        }
    };

    if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!producto) return <p className="text-center text-gray-500">Producto no encontrado</p>;

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md p-6 shadow-lg border rounded-xl">
                <CardHeader>
                    <h2 className="text-2xl font-bold text-red-600">Eliminar Producto</h2>
                </CardHeader>
                <CardBody>
                    {deleted ? (
                        <p className="text-lg text-green-600 font-semibold text-center">Producto eliminado con éxito</p>
                    ) : (
                        <>
                            <p className="text-lg text-gray-700 font-semibold">
                                ¿Estás seguro de que deseas eliminar <span className="text-red-500">{producto.nombre}</span>?
                            </p>
                            <p className="text-lg text-gray-500">Precio: ${producto.precio.toFixed(2)}</p>
                        </>
                    )}
                </CardBody>
                {!deleted && (
                    <CardFooter>
                        <div className="flex justify-between mt-4 gap-4">
                            <Button className="bg-gray-600 hover:bg-gray-700 text-white" onClick={() => router.push(`/products/${id}`)}>
                                Cancelar
                            </Button>
                            <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={handleDelete} disabled={deleting}>
                                {deleting ? "Eliminando..." : "Confirmar eliminación"}
                            </Button>
                        </div>
                    </CardFooter>
                )}
            </Card>
        </div>
    );
}
