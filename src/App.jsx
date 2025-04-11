// src/App.jsx
// Componente principal da aplicação Kaizen Code Digital

import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

/**
 * Componente principal que estrutura a landing page.
 * Todos os blocos visuais estão modularizados para manutenção fácil e escalabilidade.
 */
function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Cabeçalho com logo e botão de contato */}
      <Header />

      {/* Hero section com efeito Vanta e card destacado */}
      <Hero />

      {/* Seção de serviços oferecidos */}
      <Services />

      {/* Portfólio de projetos realizados */}
      <Portfolio />

      {/* Depoimentos de clientes */}
      <Testimonials />

      {/* Formulário de contato */}
      <ContactForm />

      {/* Rodapé com informações finais */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}

export default App
