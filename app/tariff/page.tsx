import type { Metadata } from 'next';
import TariffContent from '../components/TariffContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Tariff | Ayra Farms',
  description: 'Pricing and policies for your luxurious stay at Ayra Farms.',
};

export default function TariffPage() {
  return (
    <>
      <main>
        <TariffContent />
      </main>
      <Footer />
    </>
  );
}
