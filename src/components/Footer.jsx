import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 text-sm px-4 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          © {anoAtual} <span className="font-semibold text-white">Kaizen Code Digital</span>. Todos os direitos reservados.
        </p>

        <a
          href="https://wa.me/55SEUNUMERO" // substitua pelo número real
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition"
        >
          <FaWhatsapp className="text-lg" />
          <span className="font-medium">Fale conosco via WhatsApp</span>
        </a>
      </div>
    </footer>
  );
}
