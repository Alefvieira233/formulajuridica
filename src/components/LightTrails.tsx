/**
 * Rastros de luz de longa exposição (fotografia noturna de pista) em SVG
 * vetorial — o "carro que acabou de passar" atrás do hero. Cada rastro é
 * desenhado duas vezes: um glow largo desfocado e um núcleo fino brilhante.
 */
export default function LightTrails({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <filter id="trail-glow" x="-30%" y="-300%" width="160%" height="700%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="trail-soft" x="-30%" y="-300%" width="160%" height="700%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <linearGradient id="trail-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E10600" stopOpacity="0" />
          <stop offset="0.35" stopColor="#E10600" stopOpacity="1" />
          <stop offset="0.75" stopColor="#FF6B35" stopOpacity="1" />
          <stop offset="1" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="trail-fade-white" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faixa alta, atravessando atrás do título */}
      <g opacity="0.5">
        <path
          d="M-40 260 C 420 200, 980 235, 1480 150"
          fill="none"
          stroke="url(#trail-fade)"
          strokeWidth="16"
          filter="url(#trail-glow)"
        />
        <path
          d="M-40 260 C 420 200, 980 235, 1480 150"
          fill="none"
          stroke="url(#trail-fade-white)"
          strokeWidth="1.6"
          filter="url(#trail-soft)"
        />
      </g>

      {/* faixa média, curva mais fechada */}
      <g opacity="0.65">
        <path
          d="M-40 640 C 380 560, 900 620, 1480 470"
          fill="none"
          stroke="url(#trail-fade)"
          strokeWidth="24"
          filter="url(#trail-glow)"
        />
        <path
          d="M-40 640 C 380 560, 900 620, 1480 470"
          fill="none"
          stroke="url(#trail-fade-white)"
          strokeWidth="2"
          filter="url(#trail-soft)"
        />
      </g>

      {/* faixa baixa, mais grossa e próxima (perspectiva) */}
      <g opacity="0.8">
        <path
          d="M-40 860 C 460 760, 940 830, 1480 660"
          fill="none"
          stroke="url(#trail-fade)"
          strokeWidth="38"
          filter="url(#trail-glow)"
        />
        <path
          d="M-40 856 C 460 758, 940 826, 1480 658"
          fill="none"
          stroke="url(#trail-fade-white)"
          strokeWidth="2.6"
          filter="url(#trail-soft)"
        />
      </g>
    </svg>
  );
}
