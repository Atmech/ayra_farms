import type { Metadata } from 'next';
import StayContent from '../components/StayContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Stay | Ayra Farms',
  description: 'Explore our heritage dwelling and garden cottages. Find your sanctuary amidst the mature areca nut trees.',
};

export default function StayPage() {
  return (
    <>
      <main>
        <StayContent />
      </main>
      <Footer />
    </>
  );
}
