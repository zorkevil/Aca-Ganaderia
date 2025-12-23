import HeroSection from '@/components/misc/HeroSection';
import ServicesSection from '@/components/produccion/ServicesSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import ContactSection from '@/components/misc/ContactSection';
import { getMainBanner } from '@/lib/api/mainBanner';
import { getGeneralCategories } from '@/lib/api/generalCategories';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Producción',
  description: '',
};

const SECTION_ID = 'produccion';
const SECTION_NAME = 'Producción';

// Mock temporal
import { subservicesByArea, servicesProduccion } from '@/lib/mock';

export default async function NutricionPage() {
  const subServicesMock = subservicesByArea[SECTION_ID] || [];
  const mainBanner = await getMainBanner(SECTION_ID);
  const services = await getGeneralCategories();

  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={mainBanner.image}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <ServicesSection servicesProduccion={servicesProduccion} />
      <RelatedServicesSection excludeId={SECTION_ID} items={services} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
