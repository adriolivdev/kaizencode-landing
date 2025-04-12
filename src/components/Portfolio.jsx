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
      <h3 className="text-3xl font-bold text-[#16a34a] text-center mb-10">Portfólio</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] rounded-xl overflow-hidden shadow-md border border-[#16a34a40] hover:shadow-[#16a34a80] transition-all hover:scale-105"
          >
            <img
              src={projeto.imagem}
              alt={projeto.nome}
              className="w-full h-56 object-cover border-b border-[#16a34a40]"
            />
            <div className="p-6 text-white">
              <h4 className="text-xl font-bold mb-2">{projeto.nome}</h4>
              <p className="text-gray-300 text-sm mb-4">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[#16a34a] font-semibold hover:underline"
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