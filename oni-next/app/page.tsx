
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Signals from "../components/Signals";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Topbar />
      <Hero />
      <main id="contenido">
        <Services />
        <Benefits />
        <Signals />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
