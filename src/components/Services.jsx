// src/components/Services.jsx
import { FaGlobe, FaPaintBrush, FaRobot, FaComments, FaChartLine } from 'react-icons/fa'

export default function Services() {
  const servicos = [
    {
      nome: 'Criação de Sites',
      descricao: 'Sites modernos, responsivos e personalizados.',
      icone: <FaGlobe size={32} className="text-[#16a34a] mb-3" />,
      imagem: '/services-image/sites-image-services.png',
    },
    {
      nome: 'Design Gráfico',
      descricao: 'Identidade visual, logotipos e criativos para redes sociais.',
      icone: <FaPaintBrush size={32} className="text-[#16a34a] mb-3" />,
      imagem: '/services-image/designGrafico-services.png',
    },
    {
      nome: 'Automação de Processos',
      descricao: 'Automatizamos tarefas para ganho de tempo e produtividade.',
      icone: <FaRobot size={32} className="text-[#16a34a] mb-3" />,
      imagem: '/services-image/automacaoProcessos-services.png',
    },
    {
      nome: 'Chatbots Inteligentes',
      descricao: 'Atendimento automático via WhatsApp, Instagram e sites.',
      icone: <FaComments size={32} className="text-[#16a34a] mb-3" />,
      imagem: '/services-image/chatbot-services.png',
    },
    {
      nome: 'Social Media',
      descricao: 'Gestão de conteúdo com foco em engajamento e conversão.',
      icone: <FaChartLine size={32} className="text-[#16a34a] mb-3" />,
      imagem: '/services-image/socialmedia-services.png',
    },
  ]

  return (
    <section id="servicos" className="scroll-mt-24 bg-[#f9f9f9] py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-[#16a34a] mb-10">Nossos Serviços</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-[#16a34a20] hover:shadow-[#16a34a40] transition-all hover:scale-105 text-gray-800 flex flex-col items-center"
            >
              <img
                src={servico.imagem}
                alt={`Imagem de ${servico.nome}`}
                loading="lazy"
                className="w-full h-40 object-cover rounded mb-4 border border-[#16a34a20]"
              />
              {servico.icone}
              <h4 className="text-xl font-bold mb-2">{servico.nome}</h4>
              <p className="text-gray-600 text-sm">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
