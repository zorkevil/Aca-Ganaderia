import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/sanidad/DescriptionSection';
import ServicesSection from '@/components/misc/SubservicesSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import NewsSection from '@/components/misc/NewsSection';
import ContactSection from '@/components/misc/ContactSection';
import ProductsSection from '@/components/misc/ProductsSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanidad',
  description: '',
};

const SECTION_ID = 'sanidad';
const SECTION_NAME = 'Sanidad';

// Mock temporal
import {
  services as servicesMock,
  news as mockNews,
  subservicesByArea,
  heroImageSanidad,
  productsSanidad,
  categoriesSanidad,
  carouselSanidad,
  subcategoriesSanidad,
} from '@/lib/mock';

export default function NutricionPage() {
  const subServicesMock = subservicesByArea[SECTION_ID] || [];
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageSanidad}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <DescriptionSection />
      <ServicesSection title="Nuestras propuestas" items={subServicesMock} />
      <ProductsSection
        products={productsSanidad}
        categories={categoriesSanidad}
        subcategories={subcategoriesSanidad}
        sectionId={`productos-${SECTION_ID}`}
      />
      <CarouselSection items={carouselSanidad} />
      <NewsSection category={SECTION_NAME} news={mockNews} />
      <RelatedServicesSection excludeId={SECTION_ID} items={servicesMock} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
