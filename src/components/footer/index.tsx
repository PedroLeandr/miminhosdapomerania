import Link from "next/link";

// components/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-blue-800 text-white py-6 mt-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 Canil Amigo de Quatro Patas. Todos os direitos reservados.</p>
          <div className="mt-4">
            <Link href="https://www.facebook.com" target="_blank" className="text-yellow-400 mx-4">Facebook</Link>
            <Link href="https://www.instagram.com" target="_blank" className="text-yellow-400 mx-4">Instagram</Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  