import { useEffect, useRef } from "react";
import roboImage from "/assets/robo-kaizencode.png";
import { FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

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
        backgroundColor: 0xffffff,
        points: 6.0,
        maxDistance: 18.0,
        spacing: 20.0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="relative w-full min-h-[650px] flex items-center justify-center text-center px-6 py-28 scroll-mt-24"
    >
      <div className="relative z-20 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug tracking-tight">
            Inovação em <span className="text-[#16a34a]">Soluções Digitais</span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
            Criamos experiências digitais com{" "}
            <span className="text-[#16a34a] font-semibold">tecnologia</span>,{" "}
            <span className="text-[#16a34a] font-semibold">automações inteligentes</span> e{" "}
            <span className="text-[#16a34a] font-semibold">design estratégico</span> para impulsionar seu negócio.
          </p>

          <a
            href="#formulario"
            className="mt-8 inline-flex items-center gap-2 bg-[#16a34a] text-white font-bold px-6 py-3 rounded-md shadow-md transition duration-300 hover:bg-white hover:text-[#16a34a] border hover:border-[#16a34a] hover:scale-105"
          >
            <FaPaperPlane className="text-sm" />
            Solicitar orçamento
          </a>
        </div>

        {/* Robô com balão */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img
              src={roboImage}
              alt="Robô Kaizen"
              className="w-56 md:w-72 animate-float drop-shadow-md"
            />
            <div className="absolute -top-16 md:top-1/2 md:left-full md:-translate-y-1/2 md:ml-5 left-1/2 -translate-x-1/2 w-[200px] bg-white text-[#16a34a] px-4 py-2 rounded-lg text-sm shadow border border-[#16a34a30] font-medium leading-snug">
              Olá! Pronto(a) pra <br />
              inovar sua empresa?
              <div className="absolute hidden md:block left-0 -top-2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-[#16a34a30]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
