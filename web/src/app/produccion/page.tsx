import HeroSection from '@/components/misc/HeroSection';
import ServicesSection from '@/components/produccion/ServicesSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import ContactSection from '@/components/misc/ContactSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Producción',
  description: '',
};

const SECTION_ID = 'produccion';
const SECTION_NAME = 'Producción';

// Mock temporal
import {
  services as servicesMock,
  subservicesByArea,
  heroImageProduccion,
  servicesProduccion,
} from '@/lib/mock';

export default function NutricionPage() {
  const subServicesMock = subservicesByArea[SECTION_ID] || [];
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageProduccion}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <ServicesSection servicesProduccion={servicesProduccion} />
      <RelatedServicesSection excludeId={SECTION_ID} items={servicesMock} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
