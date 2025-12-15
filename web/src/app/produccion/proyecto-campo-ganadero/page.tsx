import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/produccion/proyecto-campo-ganadero/DescriptionSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import ContactSection from '@/components/misc/ContactSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyecto Campo Ganadero',
  description: '',
};

const SECTION_FATHER_ID = 'produccion';
const SECTION_FATHER_NAME = 'Producción';
const SECTION_ID = 'proyecto-campo-ganadero';
const SECTION_NAME = 'Proyecto Campo Ganadero';

// Mock temporal
import {
  services as servicesMock,
  heroImageProduccionProyectoCampoGanadero,
  carouselNutricion,
} from '@/lib/mock';

export default function NutricionPage() {
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageProduccionProyectoCampoGanadero}
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
