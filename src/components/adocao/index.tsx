import Link from "next/link";

// components/Adoção.tsx
const Adoção: React.FC = () => {
    return (
      <section id="adocao" className="bg-blue-100 py-16 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold">Como Adotar</h2>
          <p className="mt-4 text-lg">
            Adoção responsável: visite-nos, escolha um amigo e assine o contrato de adoção. Vamos ajudar a
            encontrar o cão ideal para sua família.
          </p>
          <Link href="#contato" className="mt-6 inline-block bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors">
            Entrar em Contato
          </Link>
        </div>
      </section>
    );
  };
  
  export default Adoção;
  