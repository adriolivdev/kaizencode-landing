// src/components/MobileMenu.jsx
// Corrigido para exibir botão de fechar visivelmente

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function MobileMenu() {
  const [aberto, setAberto] = useState(false)

  const toggleMenu = () => setAberto(!aberto)
  const fecharMenu = () => setAberto(false)

  return (
    <>
      {/* Botão para abrir o menu - visível sempre no canto direito */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-green-500 text-2xl z-50"
        aria-label="Abrir menu"
      >
        <FaBars />
      </button>

      {/* Overlay escurecido opcional */}
      {aberto && (
        <div
          onClick={fecharMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      {/* Menu lateral com botão de fechar no topo */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black border-l border-green-600 z-50 transform ${
          aberto ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Botão fechar (X) no topo direito do menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={fecharMenu}
            className="text-green-400 text-2xl"
            aria-label="Fechar menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 pt-4 text-lg font-semibold text-white">
          <a href="#servicos" onClick={fecharMenu} className="hover:text-green-400">Serviços</a>
          <a href="#portfolio" onClick={fecharMenu} className="hover:text-green-400">Portfólio</a>
          <a href="#depoimentos" onClick={fecharMenu} className="hover:text-green-400">Depoimentos</a>
          <a href="#formulario" onClick={fecharMenu} className="hover:text-green-400">Orçamento</a>
          <a href="#formulario" onClick={fecharMenu} className="bg-green-500 mt-4 px-4 py-2 rounded hover:bg-green-600 text-white text-center">
            Contato
          </a>
        </nav>
      </div>
    </>
  )
}
