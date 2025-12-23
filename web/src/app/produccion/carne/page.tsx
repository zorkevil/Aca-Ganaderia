import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/produccion/carne/DescriptionSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import ContactSection from '@/components/misc/ContactSection';
import { getMainBanner } from '@/lib/api/mainBanner';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carne',
  description: '',
};

const SECTION_FATHER_ID = 'produccion';
const SECTION_FATHER_NAME = 'Producción';
const SECTION_ID = 'carne';
const SECTION_NAME = 'Carne';

// Mock temporal
import { services as servicesMock, carouselNutricion } from '@/lib/mock';

export default async function CarnePage() {
  const mainBanner = await getMainBanner(SECTION_ID);

  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={mainBanner.image}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Producción', href: '/produccion' },
          { label: SECTION_NAME },
        ]}
      />
      <DescriptionSection />
      <CarouselSection items={carouselNutricion} />
      <RelatedServicesSection excludeId={SECTION_FATHER_ID} items={servicesMock} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_FATHER_ID}`} />
    </main>
  );
}
