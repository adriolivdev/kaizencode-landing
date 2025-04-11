// src/components/Hero.jsx
import { useEffect, useRef } from 'react'
import roboImage from '../assets/robo-kaizencode.png'

/**
 * Seção Hero com efeito Vanta Net (via CDN), robô com fala tech e botão com hover personalizado.
 */
export default function Hero() {
  const vantaRef = useRef(null)

  useEffect(() => {
    let vantaEffect = null

    const intervalo = setInterval(() => {
      if (window.VANTA && window.VANTA.NET && window.THREE && vantaRef.current) {
        vantaEffect = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x16a34a,
          backgroundColor: 0x000000,
          points: 10.0,
          maxDistance: 20.0,
          spacing: 15.0,
        })
        clearInterval(intervalo)
      }
    }, 100)

    return () => {
      clearInterval(intervalo)
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [])

  return (
    <section
      ref={vantaRef}
      className="relative w-full h-auto min-h-[550px] flex items-center justify-center text-center px-4 py-16 bg-black"
    >
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl w-full bg-black/80 p-8 rounded-xl shadow-lg border border-[#16a34a] backdrop-blur-sm">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
            Inovação em <span className="text-[#16a34a]">Soluções Digitais</span>
          </h2>

          <div className="w-24 h-1 bg-[#16a34a] mb-6 animate-pulse rounded-full mx-auto md:mx-0"></div>

          <p className="text-base md:text-lg max-w-xl text-white leading-relaxed animate-fade-up delay-100">
            Criamos experiências digitais com <span className="text-[#16a34a] font-semibold">tecnologia</span>,
            <span className="text-[#16a34a] font-semibold"> automações inteligentes</span> e
            <span className="text-[#16a34a] font-semibold"> design estratégico</span> para impulsionar seu negócio.
          </p>

          <a
            href="#formulario"
            className="mt-6 inline-block bg-[#16a34a] text-white font-bold px-6 py-3 rounded-md shadow-md transition duration-200 hover:bg-black hover:text-[#16a34a] hover:shadow-[0_0_10px_#16a34a] animate-fade-in"
          >
            Solicite um orçamento
          </a>
        </div>

        {/* Robô com balão de fala tech */}
        <div className="flex-1 flex items-center justify-center relative animate-fade-in">
          <img
            src={roboImage}
            alt="Robô Kaizen"
            className="w-56 md:w-72 drop-shadow-[0_0_18px_#16a34a] animate-float"
          />
          <div className="absolute -top-6 md:-top-10 left-[60%] -translate-x-1/2 bg-[#0f0f0f] text-[#ffffff] px-5 py-3 rounded-xl text-sm shadow-[0_0_15px_#16a34a80] border border-[#16a34a40] font-medium tracking-wide backdrop-blur-sm">
            Olá! Pronto(a) pra impulsionar seu projeto? 
            <div className="absolute -bottom-2 left-[60%] md:left-8 -translate-x-1/2 w-3 h-3 bg-[#0f0f0f] rotate-45 border-l border-t border-[#16a34a40] shadow-[0_0_6px_#16a34a80]" />
          </div>
        </div>
      </div>
    </section>
  )
}
