import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/hacienda/DescriptionSection';
import HaciendaTabsSection from '@/components/hacienda/HaciendaTabsSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import NewsSection from '@/components/misc/NewsSection';
import ContactSection from '@/components/misc/ContactSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hacienda',
  description: '',
};

const SECTION_ID = 'hacienda';
const SECTION_NAME = 'Hacienda';

// Mock temporal
import {
  services as servicesMock,
  news as mockNews,
  subservicesByArea,
  heroImageHacienda,
  carouselNutricion,
  carouselSanidad,
} from '@/lib/mock';

export default function NutricionPage() {
  const subServicesMock = subservicesByArea[SECTION_ID] || [];
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageHacienda}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <DescriptionSection />
      <HaciendaTabsSection />
      <CarouselSection items={[...carouselNutricion, ...carouselSanidad]} />
      <NewsSection category={SECTION_NAME} news={mockNews} />
      <RelatedServicesSection excludeId={SECTION_ID} items={servicesMock} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
