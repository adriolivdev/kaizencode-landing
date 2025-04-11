// src/components/Services.jsx
// Lista de serviços com ícones, estilo tech e responsividade

import { FaGlobe, FaPaintBrush, FaRobot, FaComments, FaChartLine } from 'react-icons/fa'

/**
 * Componente que exibe os serviços oferecidos pela Kaizen Code Digital.
 */
export default function Services() {
  const servicos = [
    {
      nome: 'Criação de Sites',
      descricao: 'Sites modernos, responsivos e personalizados.',
      icone: <FaGlobe size={32} className="text-green-400 mb-3" />,
    },
    {
      nome: 'Design Gráfico',
      descricao: 'Identidade visual, logotipos e criativos para redes sociais.',
      icone: <FaPaintBrush size={32} className="text-green-400 mb-3" />,
    },
    {
      nome: 'Automação de Processos',
      descricao: 'Automatizamos tarefas para ganho de tempo e produtividade.',
      icone: <FaRobot size={32} className="text-green-400 mb-3" />,
    },
    {
      nome: 'Chatbots Inteligentes',
      descricao: 'Atendimento automático via WhatsApp, Instagram e sites.',
      icone: <FaComments size={32} className="text-green-400 mb-3" />,
    },
    {
      nome: 'Social Media',
      descricao: 'Gestão de conteúdo com foco em engajamento e conversão.',
      icone: <FaChartLine size={32} className="text-green-400 mb-3" />,
    },
  ]

  return (
    <section className="bg-gray-900 py-16 px-6 text-center" id="servicos">
      <h3 className="text-3xl font-bold text-green-400 mb-10">Nossos Serviços</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105"
          >
            {servico.icone}
            <h4 className="text-xl font-bold text-white mb-2">{servico.nome}</h4>
            <p className="text-gray-300 text-sm">{servico.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
