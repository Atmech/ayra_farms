import type { Metadata } from 'next';
import BookingContent from '../components/BookingContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Book Your Stay | Ayra Farms',
  description: 'Secure your dates. We can’t wait to host you.',
};

export default function BookingPage() {
  return (
    <>
      <main>
        <BookingContent />
      </main>
      <Footer />
    </>
  );
}
