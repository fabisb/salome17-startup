"use client";
import { TextInput } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";

export default function ProductCard(props) {
  const [cantidad, setCantidad] = useState(0);
  const [btnVali, setBtnVali] = useState(false);
  const addProduct = (nombre, precio, id) => {
    try {
      if (cantidad <= 0) {
        return alert("Ingrese una cantidad valida");
      }
      const producto = { nombre, precio, cantidad, id };
      const productosGuardados =
        JSON.parse(localStorage.getItem("productos")) || [];
      const existente = productosGuardados.findIndex((prod) => prod.id === id);
      if (existente != -1) {
        productosGuardados[existente].cantidad = cantidad;
      } else {
        productosGuardados.push(producto);
      }
      // Guarda el arreglo actualizado en el localStorage
      localStorage.setItem("productos", JSON.stringify(productosGuardados));
      console.log("🚀 ~ addProduct ~ productosGuardados:", productosGuardados);
      setBtnVali(true);
      setTimeout(() => {
        console.log("Timeout");
        setBtnVali(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      return alert("Ha ocurrido un error");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a>
        <Image
          width={800}
          height={800}
          className="w-full h-auto p-8 rounded-t-lg"
          src={"/productos/" + props.imagen}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>

        <div className="flex items-center gap-4 justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${props.precio}
          </span>
          <TextInput
            type="number"
            placeholder="Cantidad"
            min={0}
            onChange={(event) => setCantidad(event.target.value)}
          ></TextInput>
          {btnVali == false ? (
            <a
              onClick={() => addProduct(props.name, props.precio, props.id)}
              className="hover:cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Agregar al carrito
            </a>
          ) : (
            <a className="hover:cursor-pointer text-white bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Agregado! <HiBadgeCheck size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
