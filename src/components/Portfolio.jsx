// src/components/Portfolio.jsx
// Seção de portfólio com projetos realizados pela Kaizen Code Digital

import { FaExternalLinkAlt } from 'react-icons/fa'

/**
 * Componente que exibe projetos do portfólio da Kaizen com layout responsivo.
 */
export default function Portfolio() {
  const projetos = [
    {
      nome: 'Loja Virtual YuriSoundCar',
      descricao: 'Site responsivo para vendas com integração ao WhatsApp.',
      imagem: '/mockup-yurisoundcar.jpg', // coloque esse mockup na pasta public
      link: 'https://yurisoundcar.com.br',
    },
    // Adicione mais projetos aqui
  ]

  return (
    <section className="py-16 px-6 bg-black" id="portfolio">
      <h3 className="text-3xl font-bold text-green-400 text-center mb-10">Portfólio</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-green-600/30 transition"
          >
            <img
              src={projeto.imagem}
              alt={projeto.nome}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl text-white font-bold mb-2">{projeto.nome}</h4>
              <p className="text-gray-300 text-sm mb-4">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-green-400 font-semibold hover:underline"
              >
                Ver projeto <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
