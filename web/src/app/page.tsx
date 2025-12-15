import HeroSection from '@/components/home/HeroSection';
import OurValuesSection from '@/components/home/OurValuesSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/misc/ContactSection';

import { heroSlides, services, news as mockNews } from '@/lib/mock';

export default function HomePage() {
  return (
    <main>
      <HeroSection slides={heroSlides} />
      <OurValuesSection />
      <ServicesSection services={services} />
      <ContactSection />
    </main>
  );
}

/*
// Futuro:
import { getHeroSlides, getServices, getLatestNews } from "@/lib/api";

const heroSlides = await getHeroSlides();
const services = await getServices();
const news = await getLatestNews();
*/
