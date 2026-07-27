import { useEffect } from "react";
import { captureUtms } from "./lib/utm";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TapeCross from "./components/TapeCross";
import LeadForm from "./components/LeadForm";
import Metodo from "./components/Metodo";
import Ecossistema from "./components/Ecossistema";
import Resultados from "./components/Resultados";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import RaceCar from "./components/RaceCar";
import StickyCta from "./components/StickyCta";

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
        <Metodo />
        <Ecossistema />
        <Resultados />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <RaceCar />
      <StickyCta />
    </>
  );
}
