import Image from "next/image";
import { NavBarComp } from "../components/navBar";
import { WsSticky } from "../components/wsSticky";

export default function About() {
  return (
    <>
      <NavBarComp></NavBarComp>
      <main className="justify-center grid bg-gradient-to-r from-orange-200 to-red-400 p-2">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4"></div>
        <WsSticky></WsSticky>
      </main>
    </>
  );
}
