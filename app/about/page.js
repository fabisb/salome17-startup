"use client";

import Image from "next/image";
import { NavBarComp } from "../components/navBar";
import { WsSticky } from "../components/wsSticky";
import { Card } from "flowbite-react";

export default function About() {
  return (
    <>
      <NavBarComp></NavBarComp>
      <main className="   bg-gradient-to-r from-orange-200 to-red-400 p-2">
        <div className="container flex justify-center">
          <Card
            className="max-w-md"
            imgAlt="Salome 17 logo"
            imgSrc="/img/icon.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Salomé 17
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Brindamos asesoria y soluciones en productos de quincalleria y
              bolsas plasticas.
            </p>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Idea de emprendimiento.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Este emprendimiento consiste en distribuir y cubrir las
              necesidades en los siguientes productos de bolsas plásticas,
              quincallería, útiles de limpieza, artículos de papelería y
              productos desechables de manera más eficiente y con excelente
              precio.
            </p>
          </Card>
        </div>
      </main>
      <WsSticky></WsSticky>
    </>
  );
}
