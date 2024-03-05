import { TextInput } from "flowbite-react";
import Image from "next/image";

import React from "react";

export default function ProductCard(props) {
  console.log("🚀 ~ ProductCard ~ props:", props);
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a>
        <Image
          width="800"
          height="800"
          className="w-full h-auto p-8 rounded-t-lg"
          src="/img/Bolsa-Plastica.jpg"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Bolsa Plastica 10 KG
          </h5>
        </a>

        <div className="flex items-center gap-4 justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $1.5
          </span>
          <TextInput type="number" placeholder="Cantidad"></TextInput>
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Agregar al carrito
          </a>
        </div>
      </div>
    </div>
  );
}
