'use client';

import { useState, useEffect } from 'react';

import HeroSection from '@/components/misc/HeroSection';
import InformesGrid from '@/components/informes/InformesGrid';
import InformesPagination from '@/components/informes/InformesPagination';
import MarketPresenter from '@/components/informes/MarketPresenter';

import { heroImageInformes, marketPresenterMock } from '@/lib/mock';
import type { ReportsItem } from '@/lib/types';

const SECTION_NAME = 'Informes';

type Props = {
  initialReports: ReportsItem[];
  initialMeta: {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
  };
};

export default function InformesPage({ initialReports, initialMeta }: Props) {
  const [page, setPage] = useState(initialMeta.current_page);
  const [reports, setReports] = useState<ReportsItem[]>(initialReports);
  const [totalPages, setTotalPages] = useState(initialMeta.last_page);
  const [total, setTotal] = useState(initialMeta.total);
  const [isLoading, setIsLoading] = useState(false);

  const perPage = initialMeta.per_page;

  useEffect(() => {
    if (page === initialMeta.current_page) return;

    const fetchReports = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/reports?page=${page}&per_page=${perPage}`, {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('Error fetching reports');
        }

        const response = await res.json();

        setReports(response.data);
        setTotalPages(response.meta.last_page);
        setTotal(response.meta.total);
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [page, perPage, initialMeta.current_page]);

  const startItem = total > 0 ? (page - 1) * perPage + 1 : 0;
  const endItem = Math.min(page * perPage, total);

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
                  {isLoading ? (
                    'Cargando...'
                  ) : (
                    <>
                      Mostrando {total > 0 ? `${startItem}-${endItem}` : '0'} de {total} resultados
                    </>
                  )}
                </p>
              </div>

              {isLoading ? (
                <div className="text-center py-5">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              ) : (
                <>
                  <InformesGrid pageInformes={reports} />

                  {totalPages > 1 && (
                    <InformesPagination page={page} totalPages={totalPages} setPage={setPage} />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
