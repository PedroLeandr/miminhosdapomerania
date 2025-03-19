import Link from "next/link";

// components/Hero.tsx
const Hero: React.FC = () => {
    return (
      <section id="home" className="bg-blue-800 text-white py-32 text-center">
        <h2 className="text-5xl font-semibold">Adote um Amigo de Quatro Patas</h2>
        <p className="mt-4 text-xl">Dê uma nova chance de vida a um dos nossos cães adoráveis.</p>
        <Link
          href="#adocao"
          className="mt-6 inline-block bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Adote Agora
        </Link>
      </section>
    );
  };
  
  export default Hero;
  