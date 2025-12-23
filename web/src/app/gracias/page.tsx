import type { Metadata } from 'next';

import HeroSection from '@/components/misc/HeroSection';
import ThankyouSection from '@/components/gracias/ThankyouSection';

import { socialLinks } from '@/lib/navigation';
import { getMainBanner } from '@/lib/api/mainBanner';

export const metadata: Metadata = {
  title: 'Gracias por contactarte',
  description: '',
};

const SECTION_ID = 'contacto';
const SECTION_NAME = 'Contacto';

export default async function ThankyouPage() {
  const mainBanner = await getMainBanner(SECTION_ID);
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={mainBanner.image}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <ThankyouSection socialLinks={socialLinks} />
    </main>
  );
}
