// src/App.jsx
// Componente principal da aplicação Kaizen Code Digital
// Importa todos os blocos da landing page e renderiza em sequência com botão flutuante de WhatsApp

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

      {/* Seção hero com frase de impacto e botão CTA */}
      <Hero />

      {/* Lista dos serviços da agência */}
      <Services />

      {/* Galeria de projetos entregues */}
      <Portfolio />

      {/* Depoimentos reais de clientes */}
      <Testimonials />

      {/* Formulário de orçamento ou mensagem */}
      <ContactForm />

      {/* Rodapé com link do WhatsApp e direitos autorais */}
      <Footer />

      {/* Botão flutuante fixo de WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}

export default App
