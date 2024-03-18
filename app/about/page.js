"use client";

import Image from "next/image";
import { NavBarComp } from "../components/navBar";
import { WsSticky } from "../components/wsSticky";
import { Card } from "flowbite-react";

export default function About() {
  return (
    <>
      <NavBarComp></NavBarComp>
      <main className="justify-center grid bg-gradient-to-r from-orange-200 to-red-400 p-2">
        <Card
          className="max-w-sm"
          renderImage={() => (
            <Image width={500} height={500} src="/img/icon.jpg" alt="image 1" />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Salomé 17
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Brindamos asesoria y soluciones en productos de quincalleria y
            bolsas plasticas.
          </p>
        </Card>
        <WsSticky></WsSticky>
      </main>
    </>
  );
}
