import Image from "next/image";
import { NavBarComp } from "../components/NavBar";
import { WsSticky } from "../components/WsSticky";
import { Card } from "flowbite-react";
import Link from "next/link";

export default function Contacto() {
  return (
    <div className="h-full">
      <NavBarComp></NavBarComp>
      <main className="justify-center grid bg-gradient-to-r h-full from-orange-200 to-red-400 p-2">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4">
          <Link target="_bank" href={"https://www.instagram.com/salome17_ca"}>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/img/insta.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Instagram
              </h5>
              <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                @salome17_ca
              </p>
            </Card>
          </Link>
          <Link
            target="_blank"
            href={
              "https://wa.me/584126443690?text=Hola, vengo de su pagina web!"
            }
          >
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/img/whats.webp"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                WhatsApp
              </h5>
              <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                0412-6443690
              </p>
            </Card>
          </Link>
        </div>
        <p className="p-3 bg-white my-5 rounded-md font-semibold text-xl">
          Mantente en contacto con nuestros asesores en nuestras redes sociales!
        </p>
      </main>
    </div>
  );
}
