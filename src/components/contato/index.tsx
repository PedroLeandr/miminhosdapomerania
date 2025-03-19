// components/Contato.tsx
const Contato: React.FC = () => {
    return (
      <section id="contato" className="bg-gray-200 py-16 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold">Entre em Contato</h2>
          <p className="mt-4 text-lg">Se tiver alguma dúvida, entre em contato conosco através do formulário abaixo:</p>
          <form className="mt-8 space-y-6">
            <input type="text" placeholder="Seu nome" className="w-full p-4 border border-gray-300 rounded-lg"/>
            <input type="email" placeholder="Seu e-mail" className="w-full p-4 border border-gray-300 rounded-lg"/>

            <textarea placeholder="Mensagem" className="w-full p-4 border border-gray-300 rounded-lg"/>

            <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700">Enviar Mensagem</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contato;
  