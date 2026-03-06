import type { Metadata } from 'next';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Our Story | Ayra Farms',
  description: 'The story of how Ayra Farms was built. A return to our roots in the Konkan coast.',
};

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
