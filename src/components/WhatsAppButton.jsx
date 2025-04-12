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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-105 transition duration-300 animate-bounce"
    >
      <FaWhatsapp size={28} />
    </a>
  )
} 