"use client";
import Image from "next/image";
import { NavBarComp } from "../components/navBar";
import { WsSticky } from "../components/wsSticky";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Carrito() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    return () => {
      setProductos(JSON.parse(localStorage.getItem("productos")));
      console.log(productos);
    };
  }, []);
  const eliminarProducto = (id) => {
    const productoEliminado = productos.filter((prod) => prod.id !== id);
    console.log(
      "🚀 ~ eliminarProducto ~ productoEliminado:",
      productoEliminado
    );
    setProductos(productoEliminado);
    localStorage.setItem("productos", JSON.stringify(productoEliminado));
  };
  return (
    <div>
      <NavBarComp></NavBarComp>
      <main className="bg-gradient-to-r h-full from-orange-200 to-red-400 p-2">
        <div className=" overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Producto</Table.HeadCell>
              <Table.HeadCell>cantidad</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {productos.length > 0 ? (
                productos.map((pr) => {
                  return (
                    <Table.Row
                      key={pr.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-semibold text-lg text-gray-900 dark:text-white">
                        {pr.nombre}
                      </Table.Cell>
                      <Table.Cell className="font-medium">
                        {pr.cantidad}
                      </Table.Cell>
                      <Table.Cell className="font-medium">
                        ${pr.precio}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          onClick={() => eliminarProducto(pr.id)}
                          color="failure"
                          pill
                        >
                          Eliminar
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              ) : (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell
                    colSpan={"4"}
                    className="whitespace-nowrap font-medium text-2xl text-gray-900 dark:text-white"
                  >
                    Agregue Productos al carrito para continuar!
                  </Table.Cell>
                </Table.Row>
              )}
              {productos.length > 0 ? (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell></Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 dark:text-white">
                    Total:
                  </Table.Cell>
                  <Table.Cell
                    colSpan={"2"}
                    className="whitespace-nowrap font-bold text-lg
                     text-gray-900 dark:text-white"
                  >
                    {productos
                      .map(
                        (pr) =>
                          parseFloat(pr.precio).toFixed(2) *
                          parseInt(pr.cantidad)
                      )
                      .reduce((a, b) => a + b)}
                    $
                  </Table.Cell>
                </Table.Row>
              ) : (
                <></>
              )}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}
