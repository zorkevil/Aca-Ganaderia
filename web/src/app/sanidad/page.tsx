import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/sanidad/DescriptionSection';
import ServicesSection from '@/components/misc/SubservicesSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import ContactSection from '@/components/misc/ContactSection';
import ProductsSection from '@/components/misc/ProductsSection';
import { getMainBanner } from '@/lib/api/mainBanner';
import { getSubservicesBySection } from '@/lib/api/services';
import { getGeneralCategories } from '@/lib/api/generalCategories';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanidad',
  description: '',
};

const SECTION_ID = 'sanidad';
const SECTION_NAME = 'Sanidad';

// Mock temporal
import {
  productsSanidad,
  categoriesSanidad,
  carouselSanidad,
  subcategoriesSanidad,
} from '@/lib/mock';

export default async function NutricionPage() {
  const mainBanner = await getMainBanner(SECTION_ID);
  const subServices = await getSubservicesBySection(SECTION_ID);
  const services = await getGeneralCategories();

  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={mainBanner.image}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />
      <DescriptionSection />
      <ServicesSection title="Nuestras propuestas" items={subServices} />
      <ProductsSection
        products={productsSanidad}
        categories={categoriesSanidad}
        subcategories={subcategoriesSanidad}
        sectionId={`productos-${SECTION_ID}`}
      />
      <CarouselSection items={carouselSanidad} />
      <RelatedServicesSection excludeId={SECTION_ID} items={services} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
