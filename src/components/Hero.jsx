// src/components/Hero.jsx
// Componente de introdução com chamada principal da landing page

/**
 * Exibe o banner principal com título, descrição e chamada para ação.
 */
export default function Hero() {
    return (
      <section className="flex flex-col items-center text-center py-20 px-4 bg-black">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          Inovação em Soluções Digitais
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-300">
          Sites, social media, design gráfico, automações e chatbots feitos sob medida para o seu negócio crescer com tecnologia.
        </p>
        <a
          href="#formulario"
          className="bg-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition"
        >
          Solicite um orçamento
        </a>
      </section>
    )
  }
  