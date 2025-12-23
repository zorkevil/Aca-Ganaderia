import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/hacienda/DescriptionSection';
import ServicesSection from '@/components/hacienda/ServicesSection';
import HaciendaTabsSectionServer from '@/components/hacienda/haciendaTabs/HaciendaTabsSection.server';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import ContactSection from '@/components/misc/ContactSection';
import { getMainBanner } from '@/lib/api/mainBanner';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hacienda',
  description: '',
};

const SECTION_ID = 'hacienda';
const SECTION_NAME = 'Hacienda';

// Mock temporal
import { services as servicesMock, carouselNutricion, carouselSanidad } from '@/lib/mock';

export default async function NutricionPage() {
  const mainBanner = await getMainBanner(SECTION_ID);

  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={mainBanner.image}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <DescriptionSection />
      <ServicesSection
        title="Servicios"
        leftItems={[
          'Compra y venta de hacienda',
          'Exportación',
          'Recría y servicios de nutrición ganadera',
          'Feedlot',
        ]}
        rightItems={[
          'Remates físicos y virtuales',
          'Comercialización en el MAG y Directas',
          'Programa de Trazabilidad ACA',
          'Identificación y Gestión electrónica',
        ]}
      />
      <HaciendaTabsSectionServer />
      <CarouselSection items={[...carouselNutricion, ...carouselSanidad]} />
      <RelatedServicesSection excludeId={SECTION_ID} items={servicesMock} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
