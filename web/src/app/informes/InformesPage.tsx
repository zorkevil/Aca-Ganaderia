'use client';

import HeroSection from '@/components/misc/HeroSection';
import InformesGrid from '@/components/informes/InformesGrid';
import InformesPagination from '@/components/informes/InformesPagination';
import MarketPresenter from '@/components/informes/MarketPresenter';

import { heroImageInformes, marketPresenterMock } from '@/lib/mock';
import type { ReportsItem } from '@/lib/types';

const SECTION_NAME = 'Informes';

type Props = {
  reports: ReportsItem[];
  meta: {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
  };
  page: number;
};

export default function InformesPage({ reports, meta, page }: Props) {
  const startItem = meta.total > 0 ? (page - 1) * meta.per_page + 1 : 0;
  const endItem = Math.min(page * meta.per_page, meta.total);

  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={heroImageInformes}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />

      <section id="informes" className="py-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <hr className="heading-hr wow animate__animated animate__fadeInUp" />
              <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Últimos informes
              </h2>
            </div>
          </div>

          <MarketPresenter {...marketPresenterMock} />

          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="small mb-0">
                  Mostrando {meta.total > 0 ? `${startItem}-${endItem}` : '0'} de {meta.total}{' '}
                  resultados
                </p>
              </div>

              <InformesGrid pageInformes={reports} />

              {meta.last_page > 1 && <InformesPagination page={page} totalPages={meta.last_page} />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
