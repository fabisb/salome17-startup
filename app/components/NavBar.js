import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavBarComp() {
  return (
    <Navbar className="w-full" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img
          src="/img/icon.jpg"
          className="rounded-lg mr-3 h-12 sm:h-16"
          alt="Salome 17 Logo"
        />
        <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Salomé 17 C.A.
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/contacto">Contacto</NavbarLink>
        <NavbarLink href="/about">Sobre nosotros</NavbarLink>
        <NavbarLink href="/carrito" className="text-red-600">
          Carrito
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
