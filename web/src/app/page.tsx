import HeroSection from '@/components/home/HeroSection';
import OurValuesSection from '@/components/home/OurValuesSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/misc/ContactSection';

import { getHomeSliders } from '@/lib/api/home';
import { getGeneralCategories } from '@/lib/api/generalCategories';

export default async function HomePage() {
  const heroSlides = await getHomeSliders();
  const services = await getGeneralCategories();

  return (
    <main>
      <HeroSection slides={heroSlides} />
      <OurValuesSection />
      <ServicesSection services={services} />
      <ContactSection />
    </main>
  );
}
