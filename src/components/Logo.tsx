import { Scale } from "lucide-react";

export default function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="Fórmula Jurídica — início">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 ring-1 ring-gold-500/40">
        <Scale className="h-5 w-5 text-gold-400" aria-hidden />
      </span>
      <span className="font-display text-lg font-bold leading-none text-white">
        Fórmula <span className="text-gold-400">Jurídica</span>
      </span>
    </a>
  );
}
