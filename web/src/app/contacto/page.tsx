import type { Metadata } from 'next';

import HeroSection from '@/components/misc/HeroSection';
import ContactSection from '@/components/misc/ContactSection';
import { getMainBanner } from '@/lib/api/mainBanner';

export const metadata: Metadata = {
  title: 'Contacto',
  description: '',
};

const SECTION_ID = 'contacto';
const SECTION_NAME = 'Contacto';

export default async function ContactoPage() {
  const mainBanner = await getMainBanner(SECTION_ID);

  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={mainBanner.image}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />

      <ContactSection
        title="Escribinos!"
        description="Si querés recibir asesoramiento o conocer nuestras soluciones adaptadas a tu producción, completá este breve formulario."
        noImage={true}
      />
    </main>
  );
}
