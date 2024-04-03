import { Footer } from "flowbite-react";
import Link from "next/link";

import { FaWhatsappSquare } from "react-icons/fa";

export function WsSticky() {
  return (
    <Link
      target="_blank"
      href={"https://wa.me/584126443690?text=Hola, vengo de su pagina web!"}
    >
      <Footer className="justify-center fixed bottom-1 right-2 z-20 w-fit p-1 bg-white border-t border-gray-200 shadow ">
        <FaWhatsappSquare className="text-7xl" color="green" />
      </Footer>
    </Link>
  );
}
