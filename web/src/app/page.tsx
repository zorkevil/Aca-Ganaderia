import HeroSection from '@/components/home/HeroSection';
import ValoresSection from '@/components/home/OurValuesSection';
import ServicesSection from '@/components/home/ServicesSection';
import NewsSection from '@/components/misc/NewsSection';
import ContactSection from '@/components/misc/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ValoresSection />
      <ServicesSection />
      <NewsSection />
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
