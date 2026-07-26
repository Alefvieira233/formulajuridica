import { useEffect } from "react";
import { captureUtms } from "./lib/utm";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import LeadForm from "./components/LeadForm";
import Imprensa from "./components/Imprensa";
import Diferencial from "./components/Diferencial";
import Metodo from "./components/Metodo";
import Ecossistema from "./components/Ecossistema";
import Resultados from "./components/Resultados";
import ParaQuem from "./components/ParaQuem";
import Founder from "./components/Founder";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    captureUtms();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <LeadForm />
        <Imprensa />
        <Diferencial />
        <Metodo />
        <Ecossistema />
        <Resultados />
        <ParaQuem />
        <Founder />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
