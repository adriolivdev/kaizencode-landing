// src/components/Testimonials.jsx
import { FaQuoteLeft } from 'react-icons/fa'

/**
 * Componente que exibe feedbacks de clientes em um layout responsivo.
 */
export default function Testimonials() {
  const depoimentos = [
    {
      nome: 'Adriana Silva - Espetos Braway | Curitiba-PR',
      texto: 'A Kaizen transformou totalmente nossa presença online! Profissionalismo e atenção em cada detalhe.',
      imagem: '/testimonials-image/braway-espetos.jpg',
    },
    {
      nome: 'Juliandeson Freitas - Yuri SoundCar | Araquari-SC',
      texto: 'Nosso site ficou incrível e as automações facilitaram muito nosso atendimento.',
      imagem: '/testimonials-image/yuri-soundcar.jpg',
    },
    {
      nome: 'Camila Duarte - Camila Estética | Joinville-SC',
      texto: 'Fiquei impressionada com a agilidade e a criatividade da equipe! Super recomendo o trabalho da Kaizen.',
      imagem: '/testimonials-image/Camila.jpg',
    },
    {
      nome: 'Ricardo Moreira - Ricardo Móveis | Joinville-SC',
      texto: 'A gestão das redes sociais fez nossa marca crescer muito em pouco tempo. Atendimento excelente!',
      imagem: '/testimonials-image/ricardo.jpg',
    },
  ]

  return (
    <section className="bg-[#f9f9f9] py-16 px-6" id="depoimentos">
      <h3 className="text-3xl font-bold text-[#16a34a] text-center mb-10">Depoimentos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {depoimentos.map((dep, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-[#16a34a20] hover:shadow-[#16a34a40] transition-all"
          >
            <FaQuoteLeft className="text-[#16a34a] text-3xl mb-4" />
            <p className="text-gray-600 text-sm italic mb-4">“{dep.texto}”</p>
            <div className="flex items-center gap-3">
              <img
                src={dep.imagem}
                alt={dep.nome}
                className="w-12 h-12 rounded-full object-cover border border-[#16a34a20]"
              />
              <span className="text-gray-800 font-semibold">{dep.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
