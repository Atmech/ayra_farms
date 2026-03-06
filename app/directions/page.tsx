import type { Metadata } from 'next';
import DirectionsContent from '../components/DirectionsContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Directions | Ayra Farms',
  description: 'How to reach Ayra Farms in Dapoli from Mumbai and Pune.',
};

export default function DirectionsPage() {
  return (
    <>
      <main>
        <DirectionsContent />
      </main>
      <Footer />
    </>
  );
}
