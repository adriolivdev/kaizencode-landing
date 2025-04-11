// src/components/Testimonials.jsx
// Seção de depoimentos reais de clientes satisfeitos

import { FaQuoteLeft } from 'react-icons/fa'

/**
 * Componente que exibe feedbacks de clientes em um layout responsivo.
 */
export default function Testimonials() {
  const depoimentos = [
    {
      nome: 'Fernanda Alves',
      texto: 'A Kaizen transformou totalmente nossa presença online! Profissionalismo e atenção em cada detalhe.',
      imagem: '/cliente1.jpg', // colocar imagem em public
    },
    {
      nome: 'João da YuriSoundCar',
      texto: 'Nosso site ficou incrível e as automações facilitaram muito nosso atendimento.',
      imagem: '/cliente2.jpg',
    },
  ]

  return (
    <section className="bg-gray-900 py-16 px-6" id="depoimentos">
      <h3 className="text-3xl font-bold text-green-400 text-center mb-10">Depoimentos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {depoimentos.map((dep, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-start shadow-lg hover:shadow-green-400/20 transition"
          >
            <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
            <p className="text-gray-300 text-sm italic mb-4">“{dep.texto}”</p>
            <div className="flex items-center gap-3">
              <img
                src={dep.imagem}
                alt={dep.nome}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-white font-semibold">{dep.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
