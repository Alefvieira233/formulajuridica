import { useEffect } from "react";
import { captureUtms } from "./lib/utm";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TapeCross from "./components/TapeCross";
import LeadForm from "./components/LeadForm";
import Imprensa from "./components/Imprensa";
import Diferencial from "./components/Diferencial";
import Metodo from "./components/Metodo";
import PitLane from "./components/PitLane";
import Ecossistema from "./components/Ecossistema";
import StickyCta from "./components/StickyCta";
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
        <TapeCross />
        <LeadForm />
        <Imprensa />
        <Diferencial />
        <Metodo />
        <PitLane />
        <Ecossistema />
        <Resultados />
        <ParaQuem />
        <Founder />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
