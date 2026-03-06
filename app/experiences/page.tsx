import type { Metadata } from 'next';
import ExperiencesContent from '../components/ExperiencesContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Experiences | Ayra Farms',
  description: 'Explore nature through forest foraging, farm-to-table cooking, kid activities, and birdsong trails at our farmstay.',
};

export default function ExperiencesPage() {
  return (
    <>
      <main>
        <ExperiencesContent />
      </main>
      <Footer />
    </>
  );
}
