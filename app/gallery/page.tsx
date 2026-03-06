import type { Metadata } from 'next';
import GalleryContent from '../components/GalleryContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Gallery | Ayra Farms',
  description: 'Life at the farm caught on film. A collection of slow moments.',
};

export default function GalleryPage() {
  return (
    <>
      <main>
        <GalleryContent />
      </main>
      <Footer />
    </>
  );
}
