import LegalContent from '@/components/misc/LegalContent';

export const metadata = {
  title: 'Políticas de Privacidad',
  description: '',
};

// Mock temporal
import { politicasPrivacidad as legalContent } from '@/lib/mock';

export default async function PoliticasPrivacidadPage() {
  return (
    <main>
      <section className="py-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <hr className="heading-hr wow animate__animated animate__fadeInUp" />

              <h1 className="h2 mb-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Políticas de Privacidad
              </h1>

              {/* Contenido dinámico con WOW aplicado desde UI */}
              <LegalContent html={legalContent} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
