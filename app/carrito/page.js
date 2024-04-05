"use client";
import Image from "next/image";
import { NavBarComp } from "../components/NavBar";
import { WsSticky } from "../components/WsSticky";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Carrito() {
  const [productos, setProductos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setProductos(JSON.parse(localStorage.getItem("productos")));
    return () => {
      setProductos(JSON.parse(localStorage.getItem("productos")));
    };
  }, []);
  const eliminarProducto = (id) => {
    const productoEliminado = productos.filter((prod) => prod.id !== id);
    setProductos(productoEliminado);
    localStorage.setItem("productos", JSON.stringify(productoEliminado));
  };
  const EnviarPedido = () => {
    try {
      if (productos.length == 0) {
        return alert("Agregue productos para continuar");
      }
      const pedido = productos.map(
        (pr) =>
          `${pr.id}. ${pr.nombre}: Cantidad: ${
            pr.cantidad
          } - Precio Unitario: ${pr.precio}$ - TOTAL: ${(
            pr.precio * pr.cantidad
          ).toFixed(2)}`
      );
      console.log("🚀 ~ EnviarPedido ~ pedido:", pedido);
      const pedidoCadena =
        `Hola! Quiero realizar un pedido desde su pagina web, estos son los productos:` +
        "\n \n" +
        pedido.join("\n \n") +
        "\n \n" +
        `TOTAL PEDIDO: ${productos
          .map((pr) => parseFloat(pr.precio).toFixed(2) * parseInt(pr.cantidad))
          .reduce((a, b) => a + b)}$`;
      console.log("🚀 ~ EnviarPedido ~ pedidoCadena:", pedidoCadena);
      window.open(
        "https://wa.me/584126443690?text=" + encodeURI(pedidoCadena),
        "_blank"
      );
    } catch (error) {
      console.log(error);
      return alert("Ha ocurrido un error");
    }
  };
  return (
    <div className="h-full w-full">
      <style jsx global>{`
      body {
        width: 100%;
      }
    `}</style>
      <NavBarComp></NavBarComp>
      <main className="bg-gradient-to-r from-orange-200 to-red-400 p-2">
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
              {productos ? (
                productos.length > 0 ? (
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
                )
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
              {productos ? (
                productos.length > 0 ? (
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
                )
              ) : (
                <></>
              )}
            </Table.Body>
          </Table>
        </div>
        {productos ? (
          productos.length > 0 ? (
            <div className="text-center my-5 grid grid-cols-2 gap-4">
              <div>
                <Link   target="_blank"
            href={
              "/img/cuentas.jpg"
            }>
                <img
                  class="h-auto max-w-lg rounded-lg"
                  src="/img/cuentas.jpg"
                  alt="Cuentas bancarias"
                  ></img>
                  </Link>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => EnviarPedido()}
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="mb-2 flex rounded bg-[#128c7e] px-6 py-2.5 text-xl font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <span className=" e-2 [&>svg]:h-9 [&>svg]:w-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </span>
                  Crear pedido!
                </button>
              </div>
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}
