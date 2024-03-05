import { Card, TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { NavBarComp } from "./components/NavBar";
import ProductCard from "./components/productCard";
import { WsSticky } from "./components/WsSticky";

export default function Home() {
  return (
    <>
      <NavBarComp></NavBarComp>
      <main className="justify-center grid bg-gradient-to-r from-orange-200 to-red-400 p-2">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          <ProductCard name='name'></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        <WsSticky></WsSticky>
      </main>
    </>
  );
}
