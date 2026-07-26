import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

/**
 * O carro que percorre a página: fixo no rodapé da tela, avança da largada
 * (topo da página) à linha de chegada (fim da página) conforme o scroll.
 * Rodas giram com a distância, o corpo inclina com a velocidade e linhas
 * de velocidade aparecem nas freadas/acelerações. Some enquanto o
 * formulário está na tela e sobe no mobile quando a barra de CTA aparece.
 */
export default function RaceCar() {
  const reduced = useReducedMotion();
  const [formOnScreen, setFormOnScreen] = useState(false);
  const [ctaLift, setCtaLift] = useState(false);

  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 18, mass: 0.5 });
  const x = useTransform(smooth, [0, 1], ["-14vw", "86vw"]);
  const wheelRotation = useTransform(smooth, [0, 1], [0, 360 * 16]);

  const velocity = useVelocity(smooth);
  const tilt = useTransform(velocity, [-0.6, 0, 0.6], [2.5, 0, -2.5]);
  const speedLines = useTransform(velocity, (v) => Math.min(Math.abs(v) * 6, 1));

  useEffect(() => {
    const form = document.getElementById("diagnostico");
    const hero = document.getElementById("inicio");
    if (!form || !hero) return;

    let heroVisible = true;
    let formVisible = false;
    const mobile = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setFormOnScreen(formVisible);
      // Mesma regra da barra de CTA fixa: só existe no mobile, após o hero
      setCtaLift(mobile.matches && !heroVisible && !formVisible);
    };

    const formObserver = new IntersectionObserver(([entry]) => {
      formVisible = entry.isIntersecting;
      update();
    });
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      update();
    });
    formObserver.observe(form);
    heroObserver.observe(hero);
    mobile.addEventListener("change", update);
    return () => {
      formObserver.disconnect();
      heroObserver.disconnect();
      mobile.removeEventListener("change", update);
    };
  }, []);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 z-30 w-full transition-[bottom] duration-300"
      style={{ bottom: ctaLift ? "calc(4.75rem + env(safe-area-inset-bottom))" : "0.25rem" }}
      animate={{ opacity: formOnScreen ? 0 : 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div style={{ x }} className="relative w-[140px] sm:w-[180px] lg:w-[210px]">
        {/* linhas de velocidade (aparecem com o ritmo do scroll) */}
        <motion.div
          style={{ opacity: speedLines }}
          className="absolute right-full top-1/2 -mt-3 mr-2 flex w-24 flex-col gap-2 sm:w-36"
        >
          <span className="h-0.5 w-full bg-gradient-to-l from-race to-transparent" />
          <span className="ml-4 h-0.5 w-3/4 bg-gradient-to-l from-[#FF6B35] to-transparent" />
          <span className="h-0.5 w-1/2 self-end bg-gradient-to-l from-white/60 to-transparent" />
        </motion.div>

        <motion.svg
          viewBox="0 0 300 84"
          style={{ rotate: tilt }}
          className="w-full drop-shadow-[0_6px_16px_rgba(225,6,0,0.35)]"
        >
          {/* sombra no chão */}
          <ellipse cx="150" cy="79" rx="120" ry="4" fill="#000" opacity="0.5" />

          {/* asa traseira */}
          <rect x="10" y="16" width="30" height="5" rx="1.5" fill="#E10600" />
          <rect x="13" y="25" width="26" height="4" rx="1.5" fill="#9B0400" />
          <rect x="36" y="14" width="5" height="32" rx="1.5" fill="#16161A" />
          <path d="M38 44 L48 58 L58 60 L40 60 Z" fill="#9B0400" />

          {/* assoalho */}
          <path d="M34 72 L268 72 L262 66 L40 66 Z" fill="#0B0B0D" />

          {/* corpo principal */}
          <path
            d="M40 66 C 52 34, 96 28, 122 42 L 128 45 C 140 38 156 38 166 45 L 200 50 L 252 58 L 276 62 L 276 66 Z"
            fill="#E10600"
          />
          {/* entrada de ar / sidepod */}
          <path d="M96 50 C 110 44, 128 46, 138 52 L 138 66 L 96 66 Z" fill="#9B0400" />
          {/* detalhe branco */}
          <path d="M58 56 C 90 40, 150 42, 200 52 L 198 55 C 150 46 92 45 62 59 Z" fill="#fff" opacity="0.85" />

          {/* cockpit + halo */}
          <path d="M122 42 C 128 30 152 30 158 42" fill="none" stroke="#16161A" strokeWidth="5" strokeLinecap="round" />
          <rect x="138" y="28" width="4" height="14" fill="#16161A" />
          <path d="M128 45 C 138 40 150 40 160 45 L 156 50 L 132 50 Z" fill="#111114" />

          {/* bico */}
          <path d="M200 50 L 276 60 L 276 66 L 196 60 Z" fill="#C00500" />
          {/* asa dianteira */}
          <rect x="252" y="68" width="46" height="4" rx="1.5" fill="#E10600" />
          <rect x="292" y="58" width="5" height="14" rx="1.5" fill="#16161A" />
          <path d="M258 62 L 292 62 L 292 65 L 258 66 Z" fill="#9B0400" />

          {/* roda traseira */}
          <g>
            <circle cx="74" cy="60" r="17" fill="#111114" />
            <circle cx="74" cy="60" r="16" fill="none" stroke="#1F1F24" strokeWidth="2" />
            <motion.g
              style={{ rotate: wheelRotation, transformBox: "fill-box", transformOrigin: "center" }}
            >
              <circle cx="74" cy="60" r="7.5" fill="#2A2A30" />
              <rect x="72.8" y="46" width="2.4" height="28" rx="1.2" fill="#4A4A52" />
              <rect x="60" y="58.8" width="28" height="2.4" rx="1.2" fill="#4A4A52" />
              <circle cx="74" cy="60" r="2.6" fill="#E10600" />
            </motion.g>
          </g>

          {/* roda dianteira */}
          <g>
            <circle cx="222" cy="60" r="17" fill="#111114" />
            <circle cx="222" cy="60" r="16" fill="none" stroke="#1F1F24" strokeWidth="2" />
            <motion.g
              style={{ rotate: wheelRotation, transformBox: "fill-box", transformOrigin: "center" }}
            >
              <circle cx="222" cy="60" r="7.5" fill="#2A2A30" />
              <rect x="220.8" y="46" width="2.4" height="28" rx="1.2" fill="#4A4A52" />
              <rect x="208" y="58.8" width="28" height="2.4" rx="1.2" fill="#4A4A52" />
              <circle cx="222" cy="60" r="2.6" fill="#E10600" />
            </motion.g>
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
