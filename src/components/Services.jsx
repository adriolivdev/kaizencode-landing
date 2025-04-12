// src/components/Services.jsx
// Lista de serviços com ícones, estilo tech e responsividade, com imagens

import { FaGlobe, FaPaintBrush, FaRobot, FaComments, FaChartLine } from 'react-icons/fa'

/**
 * Componente que exibe os serviços oferecidos pela Kaizen Code Digital.
 */
export default function Services() {
  const servicos = [
    {
      nome: 'Criação de Sites',
      descricao: 'Sites modernos, responsivos e personalizados.',
      icone: <FaGlobe size={32} className="text-[#16a34a] mb-3" />, // verde Kaizen
      imagem: '/images/servicos/sites.jpg',
    },
    {
      nome: 'Design Gráfico',
      descricao: 'Identidade visual, logotipos e criativos para redes sociais.',
      icone: <FaPaintBrush size={32} className="text-[#16a34a] mb-3" />, // verde Kaizen
      imagem: '/images/servicos/design.jpg',
    },
    {
      nome: 'Automação de Processos',
      descricao: 'Automatizamos tarefas para ganho de tempo e produtividade.',
      icone: <FaRobot size={32} className="text-[#16a34a] mb-3" />, // verde Kaizen
      imagem: '/images/servicos/automacao.jpg',
    },
    {
      nome: 'Chatbots Inteligentes',
      descricao: 'Atendimento automático via WhatsApp, Instagram e sites.',
      icone: <FaComments size={32} className="text-[#16a34a] mb-3" />, // verde Kaizen
      imagem: '/images/servicos/chatbot.jpg',
    },
    {
      nome: 'Social Media',
      descricao: 'Gestão de conteúdo com foco em engajamento e conversão.',
      icone: <FaChartLine size={32} className="text-[#16a34a] mb-3" />, // verde Kaizen
      imagem: '/images/servicos/social.jpg',
    },
  ]

  return (
    <section className="bg-black py-16 px-6 text-center" id="servicos">
      <h3 className="text-3xl font-bold text-[#16a34a] mb-10">Nossos Serviços</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] rounded-xl p-6 shadow-md border border-[#16a34a40] hover:shadow-[#16a34a80] transition-all hover:scale-105 text-white flex flex-col items-center"
          >
            <img
              src={servico.imagem}
              alt={`Imagem de ${servico.nome}`}
              className="w-full h-40 object-cover rounded mb-4 border border-[#16a34a40]"
            />
            {servico.icone}
            <h4 className="text-xl font-bold mb-2">{servico.nome}</h4>
            <p className="text-gray-300 text-sm">{servico.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 