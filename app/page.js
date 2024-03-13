
import { NavBarComp } from "./components/navBar";
import ProductCard from "./components/productCard";
import { WsSticky } from "./components/wsSticky";

export default function Home() {

  return (
    <>
      <NavBarComp></NavBarComp>
      {/* https://flowbite.com/docs/components/alerts/#javascript-behaviour */}
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg  bg-green-50 dark:bg-gray-800 dark:text-green-400 sticky top-0 z-30 hidden" role="alert">
  <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
</div>
      <main className="justify-center grid bg-gradient-to-r from-orange-200 to-red-400 p-2">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          <ProductCard imagen='alive.jpg' id='1' name="Algodon Alive (100 g)" precio='10'></ProductCard>
          <ProductCard imagen='bateriasAA.webp' id='2' name="Baterias AA (40 UND)" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-1k.png' id='3' name="Bolsa 1 Kilo" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-2k.png' id='4'  name="Bolsa 2 Kilos" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-3k.png' id='5'  name="Bolsa 3 Kilos" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-10k.png' id='6'  name="Bolsa 10 Kilos" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-15k.png' id='6'  name="Bolsa 15 Kilos" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-20k.png' id='6'  name="Bolsa 20 Kilos" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-32k.png' id='6'  name="Bolsa 32 Kilos" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-hielo.png' id='6'  name="Bolsa de hielo casero (14 x 44)" precio='10'></ProductCard>
          <ProductCard imagen='bolsa-teta.png' id='6'  name="Bolsa de teta (13 x 23)" precio='10'></ProductCard>
          <ProductCard imagen='cinta.webp' id='6'  name="Cinta Plastica Alive" precio='10'></ProductCard>
          <ProductCard imagen='envoplast.webp' id='6'  name="Envoplast Multi Film" precio='10'></ProductCard>
          <ProductCard imagen='esponja-acero.webp' id='6'  name="Esponja de Acero" precio='10'></ProductCard>
          <ProductCard imagen='guantes.png' id='6'  name="Guantes de polietireno" precio='10'></ProductCard>
          <ProductCard imagen='talco-boy.png' id='6'  name="Talco para niños" precio='10'></ProductCard>
          <ProductCard imagen='toallas-humedas.jpg' id='6'  name="Toallas humedas (50 UND)" precio='10'></ProductCard>
          <ProductCard imagen='vainilla.png' id='6'  name="Vainilla" precio='10'></ProductCard>
        </div>
        <WsSticky></WsSticky>
      </main>
    </>
  );
}
