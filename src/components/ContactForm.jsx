import React from "react"
import roboContact from "../assets/robo-kaizen-contact.png"

export default function ContactForm() {
  return (
    <section id="formulario" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Robô visual com balão de fala */}
        <div className="flex-1 text-center md:text-left animate-fade-in relative">
          <div className="inline-block relative">
            <img
              src={roboContact}
              alt="Robô Kaizen"
              className="w-56 md:w-72 mx-auto md:mx-0 drop-shadow-[0_0_18px_#16a34a] animate-float"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-[#0f0f0f] text-[#16a34a] px-5 py-3 rounded-xl text-sm shadow-[0_0_15px_#16a34a80] border border-[#16a34a40] font-medium tracking-wide backdrop-blur-sm">
              Estou aqui pra te conectar com a equipe Kaizen Code.
              <div className="absolute -top-2 left-1/2 md:left-8 -translate-x-1/2 w-3 h-3 bg-[#0f0f0f] rotate-45 border-l border-t border-[#16a34a40] shadow-[0_0_6px_#16a34a80]"></div>
            </div>
          </div>
        </div>

        {/* Formulário de contato */}
        <div className="flex-1 bg-[#0a0a0a] p-6 rounded-xl shadow-md border border-[#16a34a]/40 w-full">
          <h3 className="text-2xl font-bold text-white mb-4">Entre em contato</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
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
        </div>
      </div>
    </section>
  )
}
