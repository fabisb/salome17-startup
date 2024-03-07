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
  const eliminarProducto = ()=>{
    
  }
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
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Bolsa 10KG
                </Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>$10</Table.Cell>
                <Table.Cell>
                  <Button color="failure" pill>
                    Eliminar
                  </Button>
                </Table.Cell>
              </Table.Row>
              {productos.map((pr) => {
                return (
                  <Table.Row
                    key={pr.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {pr.nombre}
                    </Table.Cell>
                    <Table.Cell>{pr.cantidad}</Table.Cell>
                    <Table.Cell>${pr.precio}</Table.Cell>
                    <Table.Cell>
                      <Button onClick={()=>eliminarProducto} color="failure" pill>
                        Eliminar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}
