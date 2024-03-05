import { Card, TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              width="800"
              height="800"
              className="w-full h-auto p-8 rounded-t-lg"
              src="/img/Bolsa-Plastica.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Bolsa Plastica 10 KG
              </h5>
            </a>

            <div className="flex items-center gap-4 justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $1.5
              </span>
              <TextInput placeholder="Cantidad"></TextInput>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
