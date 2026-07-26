import { motion, useReducedMotion } from "framer-motion";

const LIGHTS = [0, 1, 2, 3, 4];
const CYCLE = 4.6; // segundos por volta completa

/**
 * Semáforo de largada da F1: as 5 luzes acendem em sequência e apagam
 * juntas — "it's lights out and away we go".
 */
export default function StartLights() {
  const reduced = useReducedMotion();

  return (
    <div className="mb-8 flex items-center justify-center gap-3" aria-hidden>
      {LIGHTS.map((i) => (
        <span
          key={i}
          className="relative h-4 w-4 rounded-full border border-white/10 bg-steel sm:h-5 sm:w-5"
        >
          {reduced ? (
            <span className="absolute inset-0 rounded-full bg-race shadow-race-sm" />
          ) : (
            <motion.span
              className="absolute inset-0 rounded-full bg-race shadow-race-sm"
              animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
              transition={{
                duration: CYCLE,
                times: [0, 0.1 + i * 0.09, 0.12 + i * 0.09, 0.78, 0.8, 1],
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
