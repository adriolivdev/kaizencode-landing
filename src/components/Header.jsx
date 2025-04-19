// src/components/Header.jsx
// Cabeçalho fixo com logo, menu desktop e menu hambúrguer mobile

import logo from '/assets/logo-kaizen-code.jpg' // Imagem do logotipo da empresa
import MobileMenu from './MobileMenu'

/**
 * Cabeçalho principal da Kaizen Code Digital.
 * Contém logotipo, menu desktop e menu hambúrguer mobile.
 */
export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-green-600 bg-black sticky top-0 z-[60]">
      {/* Logo e nome da empresa */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Kaizen Code Digital" className="h-10" />
        <h1 className="text-2xl font-bold text-green-500">Kaizen Code Digital</h1>
      </div>

      {/* Menu desktop - visível apenas em telas médias ou maiores */}
      <nav className="hidden md:flex gap-6 items-center text-sm font-semibold">
        <a href="#servicos" className="text-gray-300 hover:text-green-400 transition">
          Serviços
        </a>
        <a href="#portfolio" className="text-gray-300 hover:text-green-400 transition">
          Portfólio
        </a>
        <a href="#depoimentos" className="text-gray-300 hover:text-green-400 transition">
          Depoimentos
        </a>
        <a href="#formulario" className="text-gray-300 hover:text-green-400 transition">
          Orçamento
        </a>
        <a
          href="#formulario"
          className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 transition"
        >
          Contato
        </a>
      </nav>

      {/* Menu mobile - visível apenas em telas menores */}
      <div className="md:hidden mr-2">
        <MobileMenu />
      </div>
    </header>
  )
}