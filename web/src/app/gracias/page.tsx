import type { Metadata } from 'next';
import Link from 'next/link';

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
      <HeroSection title={SECTION_NAME} backgroundImage={heroImageGracias} />
      <ThankyouSection socialLinks={socialLinks} />
    </main>
  );
}
