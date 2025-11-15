import type { Metadata } from 'next';

import HeroSection from '@/components/misc/HeroSection';
import ThankyouSection from '@/components/gracias/ThankyouSection';

import { socialLinks } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Gracias por contactarte',
  description: '',
};

const SECTION_ID = 'contacto';
const SECTION_NAME = 'Contacto';

// Mock temporal
import { heroImageGracias } from '@/lib/mock';

export default function ThankyouPage() {
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageGracias}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <ThankyouSection socialLinks={socialLinks} />
    </main>
  );
}
