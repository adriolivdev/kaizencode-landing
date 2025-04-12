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
      imagem: '/cliente1.jpg',
    },
    {
      nome: 'João da YuriSoundCar',
      texto: 'Nosso site ficou incrível e as automações facilitaram muito nosso atendimento.',
      imagem: '/cliente2.jpg',
    },
    {
      nome: 'Camila Duarte',
      texto: 'Fiquei impressionada com a agilidade e a criatividade da equipe! Super recomendo o trabalho da Kaizen.',
      imagem: '/cliente3.jpg',
    },
    {
      nome: 'Ricardo Moreira',
      texto: 'A gestão das redes sociais fez nossa marca crescer muito em pouco tempo. Atendimento excelente!',
      imagem: '/cliente4.jpg',
    },
  ]

  return (
    <section className="bg-black py-16 px-6" id="depoimentos">
      <h3 className="text-3xl font-bold text-[#16a34a] text-center mb-10">Depoimentos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {depoimentos.map((dep, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] rounded-xl p-6 shadow-md border border-[#16a34a40] hover:shadow-[#16a34a80] transition-all"
          >
            <FaQuoteLeft className="text-[#16a34a] text-3xl mb-4" />
            <p className="text-gray-300 text-sm italic mb-4">“{dep.texto}”</p>
            <div className="flex items-center gap-3">
              <img
                src={dep.imagem}
                alt={dep.nome}
                className="w-12 h-12 rounded-full object-cover border border-[#16a34a40]"
              />
              <span className="text-white font-semibold">{dep.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 
