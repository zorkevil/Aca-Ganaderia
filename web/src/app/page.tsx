import HeroSection from '@/components/home/HeroSection';
import OurValuesSection from '@/components/home/OurValuesSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/misc/ContactSection';

import { getHomeSliders } from '@/lib/api/home';

import { services } from '@/lib/mock';

export default async function HomePage() {
  const heroSlides = await getHomeSliders();

  return (
    <main>
      <HeroSection slides={heroSlides} />
      <OurValuesSection />
      <ServicesSection services={services} />
      <ContactSection />
    </main>
  );
}
