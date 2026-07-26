export default function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Fórmula Jurídica — início">
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden>
        <rect width="64" height="64" rx="14" fill="#0D0D0F" />
        <path
          d="M10 44 L26 20 h10 l-4 6 h12 l-3.5 5.5 H28.5 l-3 4.5 H38 l-3.5 5.5 H22 l-2 3z"
          fill="#E10600"
        />
        <path d="M40 44 l14-24 h-6 l-14 24z" fill="#fff" opacity="0.9" />
      </svg>
      <span className="font-display text-xl uppercase leading-none tracking-wide text-white">
        Fórmula <span className="text-race">Jurídica</span>
      </span>
    </a>
  );
}
