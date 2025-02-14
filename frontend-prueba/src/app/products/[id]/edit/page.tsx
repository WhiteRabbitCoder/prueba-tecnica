"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

type Producto = {
    id: string;
    nombre: string;
    precio: number;
    descripcion: string;
};

export default function EditProductPage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://localhost:3001/producto/${id}`);
                if (!res.ok) throw new Error("Producto no encontrado");
                const data: Producto = await res.json();

                setNombre(data.nombre);
                setPrecio(data.precio.toString()); // Convertir número a string
                setDescripcion(data.descripcion);
            } catch (err) {
                setError("Error al cargar el producto");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3001/producto/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre,
                    precio: parseFloat(precio), // Convertir string a número antes de enviarlo
                    descripcion,
                }),
            });

            if (!res.ok) throw new Error("Error al actualizar el producto");

            router.push(`/products/${id}`); // Redirigir a los detalles del producto
        } catch (err) {
            setError("Error al actualizar el producto");
        }
    };

    if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md p-6 shadow-lg border rounded-xl">
                <CardHeader>
                    <h2 className="text-2xl font-bold">Editar Producto</h2>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            label="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                        <Input
                            label="Precio"
                            type="number"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            required
                        />
                        <Input
                            label="Descripción"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                            Guardar Cambios
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="text-center">
                    <Button className="bg-gray-500 hover:bg-gray-600 text-white" onClick={() => router.push(`/products/${id}`)}>
                        Cancelar
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
