import type { Metadata } from 'next';
import FoodContent from '../components/FoodContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Food | Ayra Farms',
  description: 'Farm-to-table meals made using produce from our own farm. Slow cooking over a wood fire in our Konkan kitchen.',
};

export default function FoodPage() {
  return (
    <>
      <main>
        <FoodContent />
      </main>
      <Footer />
    </>
  );
}
