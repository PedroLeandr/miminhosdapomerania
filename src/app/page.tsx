import { Cardcuidados } from "@/components/cardcuidados";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite, faPaw, faBone, faBath } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div id="Section1" className="banner flex flex-row felx-col-2 justify-center items-center">
        <div className="banner-text w-1/2">
          <h1 className="text-2xl font-800 mb-6">Bem vindo ao Miminhos da Pomerânia!</h1>
          <h2 className="text-5xl mb-4">Encontre o Companheiro Perfeito! 🐾</h2>
          <p className="mb-6">Adotar um cachorrinho é uma decisão que vai mudar sua vida para melhor. Os cães são leais, carinhosos e oferecem amor incondicional. Além disso, eles contribuem para uma vida mais saudável, ajudando no relaxamento e no exercício. Não perca a chance de ter um fiel companheiro e trazer mais felicidade para sua vida!</p>
          <Link href="#" className="btn">Fale comigo!</Link>
        </div>
        <div className="banner-img w-1/2 flex justify-center items-center">
          <img className="w-70 rounded-2xl" src="https://picsum.photos/500" alt="Imagem de um cão no banner principal " />
        </div>
      </div>

      <hr className="my-14 border-t-2" />

      <div id="Section2" className="flex flex-col items-center w-full my-14">
        <h2 className="text-center text-5xl mb-10">Cuidados com os Cães</h2>
        <div className="flex items-center justify-between w-full my-14">
          <Cardcuidados icon={<FontAwesomeIcon icon={faDrumstickBite} className="w-20" />} title={'Alimentar'} text={'Mantenha seu cão bem alimentado!'}/>
          <Cardcuidados icon={<FontAwesomeIcon icon={faBone} className="w-20" />} title={'Passear'} text={' Leve seu cão para uma caminhada!'}/>
          <Cardcuidados icon={<FontAwesomeIcon icon={faPaw} className="w-20" />} title={'Exercitar'} text={'Deixe seu cão ativo e saudável!'}/>
          <Cardcuidados icon={<FontAwesomeIcon icon={faBath} className="w-20" />} title={'Banho'} text={'Mantenha seu cão limpo e cheiroso!'}/>
        </div>
      </div>
    </main>
    
  );
}