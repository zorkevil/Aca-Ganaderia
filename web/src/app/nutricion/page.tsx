import HeroSection from '@/components/misc/HeroSection';
import DescriptionSection from '@/components/nutricion/DescriptionSection';
import ServicesSection from '@/components/misc/SubservicesSection';
import CarouselSection from '@/components/misc/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import NewsSection from '@/components/misc/NewsSection';
import ContactSection from '@/components/misc/ContactSection';
import ProductsSection from '@/components/misc/ProductsSection';

const SECTION_ID = 'nutricion';
const SECTION_NAME = 'Nutrición';

// Mock temporal
import {
  services as servicesMock,
  news as mockNews,
  subservicesByArea,
  heroImageMock,
  productsNutricion,
  categoriesNutricion,
  carouselNutricion,
} from '@/lib/mock';

export default function NutricionPage() {
  const subServicesMock = subservicesByArea[SECTION_ID] || [];
  return (
    <main>
      <HeroSection title={SECTION_NAME} backgroundImage={heroImageMock} />
      <DescriptionSection />
      <ServicesSection items={subServicesMock} />
      <ProductsSection
        products={productsNutricion}
        categories={categoriesNutricion}
        sectionId={`productos-${SECTION_ID}`}
      />
      <CarouselSection items={carouselNutricion} />
      <NewsSection category={SECTION_NAME} news={mockNews} />
      <RelatedServicesSection excludeId={SECTION_ID} items={servicesMock} />
      <ContactSection description="" submitTo={`/api/contacto-${SECTION_ID}`} />
    </main>
  );
}
