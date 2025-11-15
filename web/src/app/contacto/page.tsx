import type { Metadata } from 'next';

import HeroSection from '@/components/misc/HeroSection';
import ContactSection from '@/components/misc/ContactSection';

import { heroImageContacto } from '@/lib/mock';

export const metadata: Metadata = {
  title: 'Contacto',
  description: '',
};

const SECTION_ID = 'contacto';
const SECTION_NAME = 'Contacto';

export default function ContactoPage() {
  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageContacto}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />

      <ContactSection
        title="Escribínos!"
        description="Si querés recibir asesoramiento o conocer nuestras soluciones adaptadas a tu producción, completá este breve formulario."
        noImage={true}
      />
    </main>
  );
}
