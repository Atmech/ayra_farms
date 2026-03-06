import Hero from "./components/Hero";
import AyraScrollMap from "./components/AyraScrollMap";
import HomePreviews from "./components/HomePreviews";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./components/Footer";
import MusicFab from "./components/MusicFab";
import InquiryForm from "./components/InquiryForm";
import { featureFlags } from "@/lib/flags";


export default function Home() {
  return (
    <>
      <main>
        {featureFlags.ayraScrollMap && <AyraScrollMap />}
        <Hero />
        <ScrollReveal>
          <HomePreviews />
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
