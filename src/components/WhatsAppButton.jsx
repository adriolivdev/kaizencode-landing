// src/components/WhatsAppButton.jsx
// Botão flutuante de WhatsApp fixo no canto inferior direito da tela

import { FaWhatsapp } from 'react-icons/fa'

/**
 * Botão fixo no canto inferior direito com ícone do WhatsApp.
 * Abre uma conversa no WhatsApp com o número da empresa.
 */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/55SEUNUMERO" // Substitua por seu número com DDD (sem + ou traços)
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all animate-bounce"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
