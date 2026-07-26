import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso em segundos (para cascatas) */
  delay?: number;
  /** Direção de entrada */
  from?: "up" | "left" | "right" | "none";
  className?: string;
}

/** Entrada suave quando o elemento aparece no viewport. */
export default function Reveal({ children, delay = 0, from = "up", className }: RevealProps) {
  const reduced = useReducedMotion();

  const offset =
    from === "up" ? { y: 32 } : from === "left" ? { x: -40 } : from === "right" ? { x: 40 } : {};

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
