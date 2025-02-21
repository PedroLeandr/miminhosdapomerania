import { Cardcuidados } from "@/components/cardcuidados";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite, faPaw, faBone, faBath } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div id="Section1" className="banner flex flex-col lg:flex-row justify-center items-center p-6">
        <div className="banner-text w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl font-extrabold mb-6">Bem vindo ao Miminhos da Pomerânia!</h1>
          <h2 className="text-4xl md:text-5xl mb-4">Encontre o Companheiro Perfeito! 🐾</h2>
          <p className="mb-6 text-lg md:text-xl">
            Adotar um cachorrinho é uma decisão que vai mudar sua vida para melhor. Os cães são leais, carinhosos e oferecem amor incondicional. Além disso, eles contribuem para uma vida mais saudável, ajudando no relaxamento e no exercício. Não perca a chance de ter um fiel companheiro e trazer mais felicidade para sua vida!
          </p>
          <Link href="#" className="btn px-6 py-2 text-white bg-blue-600 rounded-lg">Fale comigo!</Link>
        </div>
        <div className="banner-img w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <img className="w-4/5 md:w-3/5 rounded-2xl" src="https://picsum.photos/500" alt="Imagem de um cão no banner principal" />
        </div>
      </div>
    
      <hr className="my-14 border-t-2 mx-auto" />
    
      <div id="Section2" className="flex flex-col items-center w-full my-14 px-6">
        <h2 className="text-center text-4xl md:text-5xl mb-10">Cuidados com os Cães</h2>
        <div className="w-full max-w-6xl">
            <div className="hidden lg:flex justify-between w-full gap-20">
            <Cardcuidados icon={<FontAwesomeIcon icon={faDrumstickBite} className="w-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Alimentar'} text={'Mantenha seu cão bem alimentado!'} />
            <Cardcuidados icon={<FontAwesomeIcon icon={faBone} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Passear'} text={'Leve seu cão para uma caminhada!'} />
            <Cardcuidados icon={<FontAwesomeIcon icon={faPaw} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Exercitar'} text={'Deixe seu cão ativo e saudável!'} />
            <Cardcuidados icon={<FontAwesomeIcon icon={faBath} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Banho'} text={'Mantenha seu cão limpo e cheiroso!'} />
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
            <Cardcuidados icon={<FontAwesomeIcon icon={faDrumstickBite} className="w-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Alimentar'} text={'Mantenha seu cão bem alimentado!'} />
            <Cardcuidados icon={<FontAwesomeIcon icon={faBone} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Passear'} text={'Leve seu cão para uma caminhada!'} />
            <Cardcuidados icon={<FontAwesomeIcon icon={faPaw} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Exercitar'} text={'Deixe seu cão ativo e saudável!'} />
            <Cardcuidados icon={<FontAwesomeIcon icon={faBath} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 " />} title={'Banho'} text={'Mantenha seu cão limpo e cheiroso!'} />
          </div>
        </div>
      </div>
    </main>
  );
}