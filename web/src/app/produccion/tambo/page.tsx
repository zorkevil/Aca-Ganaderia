import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/produccion/tambo/DescriptionSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import NewsSection from '@/components/misc/NewsSection';
import ContactSection from '@/components/misc/ContactSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tambo',
  description: '',
};

const SECTION_FATHER_ID = 'produccion';
const SECTION_FATHER_NAME = 'Producción';
const SECTION_ID = 'tambo';
const SECTION_NAME = 'Tambo';

// Mock temporal
import {
  services as servicesMock,
  news as mockNews,
  subservicesByArea,
  heroImageProduccionTambo,
  carouselNutricion,
} from '@/lib/mock';

export default function NutricionPage() {
  const subServicesMock = subservicesByArea[SECTION_FATHER_ID] || [];
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageProduccionTambo}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Producción', href: '/produccion' },
          { label: SECTION_NAME },
        ]}
      />
      <DescriptionSection />
      <CarouselSection items={carouselNutricion} />
      <NewsSection category={SECTION_FATHER_NAME} news={mockNews} />
      <RelatedServicesSection excludeId={SECTION_FATHER_ID} items={servicesMock} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_FATHER_ID}`} />
    </main>
  );
}
