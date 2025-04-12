import React from "react";
import roboContact from "../assets/robo-kaizen-contact.png";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section id="formulario" className="bg-black py-20 px-6 mb-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Robô visual com balão de fala */}
        <div className="flex-1 flex justify-center md:justify-start animate-fade-in relative">
          <div className="relative inline-flex items-center gap-4">
            <img
              src={roboContact}
              alt="Robô Kaizen"
              className="w-56 md:w-72 drop-shadow-[0_0_18px_#16a34a] animate-float"
            />
            <div className="relative bg-[#0f0f0f] text-[#16a34a] px-5 py-3 rounded-xl text-sm shadow-[0_0_15px_#16a34a80] border border-[#16a34a40] font-medium tracking-wide backdrop-blur-sm max-w-[200px]">
              Estou aqui pra te conectar com a equipe Kaizen Code.
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 bg-[#0f0f0f] rotate-45 border-l border-t border-[#16a34a40] shadow-[0_0_6px_#16a34a80]"></div>
            </div>
          </div>
        </div>

        {/* Formulário de contato e redes sociais */}
        <div className="flex-1 bg-[#0a0a0a] p-6 rounded-xl shadow-md border border-[#16a34a]/40 w-full">
          <h3 className="text-2xl font-bold text-white mb-4">Entre em contato</h3>
          <form className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Seu nome"
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            />
            <input
              type="tel"
              placeholder="Seu WhatsApp (obrigatório)"
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            />
            <input
              type="email"
              placeholder="Seu e-mail (opcional)"
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            />
            <textarea
              rows="4"
              placeholder="Mensagem"
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            ></textarea>
            <button
              type="submit"
              className="bg-[#16a34a] hover:bg-green-600 transition px-6 py-3 rounded text-black font-bold w-full"
            >
              Enviar mensagem
            </button>
          </form>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <span className="font-semibold text-white">Ou fale com a gente pelas redes:</span>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://wa.me/55SEUNUMERO" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400 hover:underline">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="https://instagram.com/kaizencodedigital" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-pink-400 hover:underline">
                <FaInstagram /> Instagram
              </a>
              <a href="https://facebook.com/kaizencodedigital" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
                <FaFacebookF /> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}