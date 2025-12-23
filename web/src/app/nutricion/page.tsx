import type { Metadata } from 'next';

import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/nutricion/DescriptionSection';
import ServicesSection from '@/components/misc/SubservicesSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import ContactSection from '@/components/misc/ContactSection';
import ProductsSection from '@/components/misc/ProductsSection';
import { getMainBanner } from '@/lib/api/mainBanner';
import { getSubservicesBySection } from '@/lib/api/services';
import { getGeneralCategories } from '@/lib/api/generalCategories';

export const metadata: Metadata = {
  title: 'Nutrición',
  description: '',
};

const SECTION_ID = 'nutricion';
const SECTION_NAME = 'Nutrición';

// Mock temporal
import { products, categoriesNutricion, carouselNutricion } from '@/lib/mock';

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
      <ServicesSection items={subServices} />
      <ProductsSection
        products={products}
        categories={categoriesNutricion}
        sectionId={`productos-${SECTION_ID}`}
      />
      <CarouselSection items={carouselNutricion} />
      <RelatedServicesSection excludeId={SECTION_ID} items={services} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
