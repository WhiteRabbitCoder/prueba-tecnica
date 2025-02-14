"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

export default function NewProductPage() {
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        const nuevoProducto = { nombre, precio: parseFloat(precio), descripcion };

        try {
            const res = await fetch("http://localhost:3001/producto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoProducto),
            });

            if (!res.ok) throw new Error("Error al crear el producto");

            setMessage("Producto creado exitosamente ✅");
            setTimeout(() => router.push("/products"), 2000);
        } catch (err) {
            setError("Hubo un problema al guardar el producto ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md p-6 shadow-lg border rounded-xl">
                <CardHeader>
                    <h2 className="text-2xl font-bold">Crear Producto</h2>
                </CardHeader>
                <CardBody>
                    {message && <p className="text-green-600 text-sm text-center">{message}</p>}
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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
                        <Button type="submit" disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white">
                            {loading ? "Guardando..." : "Guardar Producto"}
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white" onClick={() => router.push("/products")}>
                        Cancelar
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
