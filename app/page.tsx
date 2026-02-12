import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PagesFromFarm from "./components/PagesFromFarm";
import TheDwelling from "./components/TheDwelling";
import NupursKitchen from "./components/NupursKitchen";
import CaughtOnFilm from "./components/CaughtOnFilm";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import MusicFab from "./components/MusicFab";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <PagesFromFarm />
        </ScrollReveal>
        <ScrollReveal>
          <TheDwelling />
        </ScrollReveal>
        <ScrollReveal>
          <NupursKitchen />
        </ScrollReveal>
        <ScrollReveal>
          <CaughtOnFilm />
        </ScrollReveal>
        <ScrollReveal>
          <InquiryForm />
        </ScrollReveal>
      </main>
      <Footer />
      <MusicFab />
    </>
  );
}
