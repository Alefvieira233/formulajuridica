import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FORM_ANCHOR, HERO } from "@/content";

/**
 * Barra de CTA fixa no mobile (onde vive o tráfego de anúncio).
 * Aparece depois do hero e some enquanto o formulário está na tela,
 * para nunca competir com o CTA principal.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const form = document.getElementById("diagnostico");
    if (!hero || !form) return;

    let heroVisible = true;
    let formVisible = false;
    const update = () => setShow(!heroVisible && !formVisible);

    const heroObserver = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      update();
    });
    const formObserver = new IntersectionObserver(([entry]) => {
      formVisible = entry.isIntersecting;
      update();
    });
    heroObserver.observe(hero);
    formObserver.observe(form);
    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-race/40 bg-track/95 px-4 pt-3 backdrop-blur md:hidden"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <a href={FORM_ANCHOR} className="btn-race w-full !py-3.5 !text-base">
            {HERO.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
