// src/components/Footer.jsx
// Rodapé com direitos autorais e link para WhatsApp da empresa

import { FaWhatsapp } from 'react-icons/fa'

/**
 * Componente de rodapé com marca, ano e contato rápido.
 */
export default function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="bg-black text-center text-gray-500 py-6 text-sm px-4">
      <p>© {anoAtual} Kaizen Code Digital. Todos os direitos reservados.</p>
      <div className="mt-2">
        <a
          href="https://wa.me/55SEUNUMERO" // substitua com seu número
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-green-500 font-semibold hover:underline"
        >
          <FaWhatsapp className="mr-2" /> Fale com a gente no WhatsApp
        </a>
      </div>
    </footer>
  )
}
