import { Navbar, NavbarBrand, NavbarItem } from "@heroui/navbar";
import Link from "next/link";

export function Header() {
    return (
        <Navbar className="h-20 bg-gray-800 text-white px-6 flex justify-center">
            <NavbarBrand className="flex gap-6 items-center">
                <NavbarItem as={Link} href="/">Home</NavbarItem>
                <NavbarItem as={Link} href="/products">Lista de Productos</NavbarItem>
                <NavbarItem as={Link} href="/products/new">Crear Producto</NavbarItem>
            </NavbarBrand>
        </Navbar>
    );
}
