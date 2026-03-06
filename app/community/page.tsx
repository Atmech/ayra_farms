import type { Metadata } from 'next';
import CommunityContent from '../components/CommunityContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Community | Ayra Farms',
  description: 'Stories and tales from our community of guests.',
};

export default function CommunityPage() {
  return (
    <>
      <main>
        <CommunityContent />
      </main>
      <Footer />
    </>
  );
}
