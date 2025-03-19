// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Canil Amigo de Quatro Patas</h1>
        <nav className="space-x-6">
          <Link href="#home" className='text-lg hover:text-yellow-400 transition-colors'>
            Início
          </Link>
          <Link href="#sobre" className='text-lg hover:text-yellow-400 transition-colors'>
            Sobre
          </Link>
          <Link href="#adocao"  className='text-lg hover:text-yellow-400 transition-colors'>
            Adoção
          </Link>
          <Link href="#contato" className='text-lg hover:text-yellow-400 transition-colors'>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
