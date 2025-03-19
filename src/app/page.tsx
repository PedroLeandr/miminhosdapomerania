// pages/index.tsx
import Header from '@/components/header';
import Hero from '@/components/hero';
import Sobre from '@/components/sobre';
import Adoção from '@/components/adocao';
import Contato from '@/components/contato';
import Footer from '@/components/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre />
      <Adoção />
      <Contato />
      <Footer />
    </div>
  );
};

export default Home;
