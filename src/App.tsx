import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Metodo from "./components/Metodo";
import Beneficios from "./components/Beneficios";
import Depoimentos from "./components/Depoimentos";
import Oferta from "./components/Oferta";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Metodo />
        <Beneficios />
        <Depoimentos />
        <Oferta />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
