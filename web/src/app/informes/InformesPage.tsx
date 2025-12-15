'use client';

import { useState, useMemo } from 'react';

import HeroSection from '@/components/misc/HeroSection';
import InformesGrid from '@/components/informes/InformesGrid';
import InformesPagination from '@/components/informes/InformesPagination';
import MarketPresenter from '@/components/informes/MarketPresenter';

import { heroImageInformes, informes, marketPresenterMock } from '@/lib/mock';

const SECTION_NAME = 'Informes';

export default function InformesPage() {
  //const categories = [...new Set(informes.map((i) => i.category))];
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 9;

  const filteredInformes = useMemo(() => {
    let result = informes;
    if (selectedCats.length > 0) {
      //result = result.filter((i) => selectedCats.includes(i.category));
    }
    return result;
  }, [selectedCats]);

  const totalPages = Math.ceil(filteredInformes.length / perPage);
  const pageInformes = filteredInformes.slice((page - 1) * perPage, page * perPage);

  const toggleCategory = (cat: string) => {
    setPage(1);
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const clearCategory = (cat: string) => {
    setSelectedCats((prev) => prev.filter((c) => c !== cat));
  };

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
            {/* Contenido principal */}
            <div className="col-lg-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="small mb-0">
                  Mostrando{' '}
                  {filteredInformes.length > 0
                    ? `${(page - 1) * perPage + 1}-${Math.min(page * perPage, filteredInformes.length)}`
                    : '0'}{' '}
                  de {filteredInformes.length} resultados
                </p>
              </div>

              <InformesGrid pageInformes={pageInformes} />

              {totalPages > 1 && (
                <InformesPagination page={page} totalPages={totalPages} setPage={setPage} />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
