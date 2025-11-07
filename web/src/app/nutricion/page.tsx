import HeroSection from '@/components/nutricion/HeroSection';
import DescriptionSection from '@/components/nutricion/DescriptionSection';
import ServicesSection from '@/components/nutricion/ServicesSection';
import CarouselSection from '@/components/nutricion/CarouselSection';
import RelatedServicesSection from '@/components/misc/RelatedServicesSection';
import NewsSection from '@/components/misc/NewsSection';
import ContactSection from '@/components/misc/ContactSection';

export default function NutricionPage() {
  return (
    <main>
      <HeroSection />
      <DescriptionSection />
      <ServicesSection />
      <CarouselSection />
      <NewsSection category="Nutrición" />
      <RelatedServicesSection />
      <ContactSection description="" submitTo="/api/contacto-nutricion" />
    </main>
  );
}
