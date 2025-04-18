import React, { useState } from "react";
import roboContact from "/src/assets/robo-kaizen-contact.png";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function ContactForm() {
  const [formEnviado, setFormEnviado] = useState(false);

  const handleSubmit = async (e) => {
    if (e.cancelable) e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbylf5xJLTusf-1WRu4y1LiBFVbhHhNfJHavznuZAVEmRY3i2JTCQ7h45CPl17jjiH84ZU/exec", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setFormEnviado(true);
      form.reset();
      setTimeout(() => setFormEnviado(false), 6000);
    } catch (err) {
      console.error("Erro ao enviar dados para Google Sheets", err);
    }
  };

  return (
    <section id="formulario" className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Robô com balão */}
        <div className="flex-1 flex justify-center md:justify-start relative">
          <div className="relative flex items-center gap-4">
            <img
              src={roboContact}
              alt="Robô Kaizen"
              className="w-56 md:w-72 animate-float drop-shadow-md"
            />
            <div className="relative bg-white text-[#16a34a] px-4 py-2 rounded-lg text-sm shadow-md border border-[#16a34a30] max-w-[180px] leading-snug font-medium">
              Estou aqui pra te conectar com a equipe Kaizen Code.
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-[#16a34a30]" />
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md border border-gray-200 w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Entre em contato</h3>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="Seu WhatsApp (obrigatório)"
              required
              className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail (opcional)"
              className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
            />
            <textarea
              name="mensagem"
              rows="4"
              placeholder="Mensagem"
              className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#16a34a] text-white font-bold py-3 rounded-md hover:bg-green-600 transition-all"
            >
              Enviar mensagem
            </button>

            {formEnviado && (
              <div className="mt-4 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded text-sm text-center font-medium">
                ✅ Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
            )}
          </form>

          <div className="text-sm text-gray-700">
            <p className="font-semibold text-gray-800 mb-2">Ou fale com a gente pelas redes:</p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5592986120257"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-green-600 hover:underline"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="https://instagram.com/kaizencodedigital"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-pink-500 hover:underline"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://facebook.com/kaizencodedigital"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:underline"
              >
                <FaFacebookF /> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
