import { Footer } from "flowbite-react";

import { FaWhatsappSquare } from "react-icons/fa";

export function WsSticky() {
  return (
    <Footer className="justify-center fixed bottom-1 right-2 z-20 w-fit p-1 bg-white border-t border-gray-200 shadow ">
      <FaWhatsappSquare className="text-5xl" color="green" />
    </Footer>
  );
}
