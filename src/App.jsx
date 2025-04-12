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
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App