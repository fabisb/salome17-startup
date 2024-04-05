
import { NavBarComp } from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { WsSticky } from "./components/WsSticky";

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
          <ProductCard id='10' imagen='bolsa-teta.png'   name="Bolsas de teta x1000 (13 x 23)" precio='4.25'></ProductCard>
          <ProductCard id='9' imagen='bolsa-hielo.png'   name="Bolsas de hielo casero x1000 (14 x 44)" precio='10.17'></ProductCard>
          <ProductCard id='1' imagen='bolsa-1k.png'  name="Bolsas 1 KG SIN ASA" precio='3.98'></ProductCard>
          <ProductCard id='2' imagen='bolsa-2k.png'  name="Bolsas 2 KG CON ASAS" precio='4.63'></ProductCard>
          <ProductCard id='3' imagen='bolsa-3k.png'  name="Bolsas 3 KG CON ASAS" precio='7.17'></ProductCard>
          <ProductCard id='4' imagen='bolsa-5k.png'  name="Bolsas 5 KG CON ASAS" precio='9.43'></ProductCard>
          <ProductCard id='5' imagen='bolsa-10k.png' name="Bolsas 10 KG CON ASAS" precio='13.49'></ProductCard>
          <ProductCard id='6' imagen='bolsa-15k.png' name="Bolsas 15 KG CON ASAS" precio='16.61'></ProductCard>
          <ProductCard id='7' imagen='bolsa-20k.png' name="Bolsas 20 KG CON ASAS" precio='23.44'></ProductCard>
          <ProductCard id='8' imagen='bolsa-32k.png' name="Bolsas 30 KG x1000 CON ASAS" precio='47.19'></ProductCard>
          <ProductCard id='21' imagen='bolsa-200lt.webp'   name="Bolsas 200 LTS x100 CAL 8" precio='21.25'></ProductCard>
          <ProductCard id='11' imagen='alive.png'  name="Algodon Alive (10 g)" precio='0.68'></ProductCard>
          <ProductCard id='12' imagen='maquina-dorco.png'  name="Afectadora DORCO" precio='0.68'></ProductCard>
          <ProductCard id='13' imagen='alident.webp'  name="Crema Dental ALIDENT X12" precio='9.92'></ProductCard>
          <ProductCard id='14' imagen='bateriasAA.webp'  name="Baterias ALLISON AA / AAA x4x10" precio='4.60'></ProductCard>
          <ProductCard id='15' imagen='esponja-multiuso.webp'   name="Esponja Multiuso x12" precio='2.51'></ProductCard>
          <ProductCard id='17' imagen='esponja-jabonosa.png'   name="Esponja Jabonosa ALLISON x5" precio='0.74'></ProductCard>
          <ProductCard id='16' imagen='esponja-acero.webp'   name="Esponja de Alambre POLY x12" precio='4.11'></ProductCard>
          <ProductCard id='18' imagen='talco.jpeg'   name="Talco para bebe FINGER 200 GR" precio='1.12'></ProductCard>
          <ProductCard id='19' imagen='vainilla.png'   name="Vainilla TASTY 212 ML" precio='0.55'></ProductCard>
          <ProductCard id='20' imagen='vainilla4.jpg'   name="Vainilla TASTY 450 ML" precio='1.09'></ProductCard>
        </div>
      </main>
    </>
  );
}
