
import { NavBarComp } from "./components/navBar";
import ProductCard from "./components/productCard";
import { WsSticky } from "./components/wsSticky";

export default function Home() {

  return (
    <>
      <NavBarComp></NavBarComp>
      <main className="justify-center grid bg-gradient-to-r from-orange-200 to-red-400 p-2">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          <ProductCard id='1' name="Bolsa1" precio='10'></ProductCard>
          <ProductCard id='2' name="Bolsa2" precio='10'></ProductCard>
          <ProductCard id='3' name="Bolsa3" precio='10'></ProductCard>
          <ProductCard id='4' name="Bolsa4" precio='10'></ProductCard>
          <ProductCard id='5' name="Bolsa5" precio='10'></ProductCard>
          <ProductCard id='6' name="Bolsa6" precio='10'></ProductCard>
        </div>
        <WsSticky></WsSticky>
      </main>
    </>
  );
}
