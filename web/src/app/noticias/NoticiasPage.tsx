'use client';

import { useState, useMemo } from 'react';

import HeroSection from '@/components/misc/HeroSection';
import NoticiasSidebar from '@/components/noticias/NoticiasSidebar';
import NoticiasGrid from '@/components/noticias/NoticiasGrid';
import NoticiasPagination from '@/components/noticias/NoticiasPagination';

import { news } from '@/lib/mock';

const SECTION_NAME = 'Noticias';

export default function NoticiasPage() {
  const categories = [...new Set(news.map((n) => n.category))];
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 9;

  const filteredNews = useMemo(() => {
    let result = news;
    if (selectedCats.length > 0) {
      result = result.filter((n) => selectedCats.includes(n.category));
    }
    return result;
  }, [selectedCats]);

  const totalPages = Math.ceil(filteredNews.length / perPage);
  const pageNews = filteredNews.slice((page - 1) * perPage, page * perPage);

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
        backgroundImage={'ejemplo'}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: SECTION_NAME }]}
      />

      <section id="noticias" className="py-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <hr className="heading-hr wow animate__animated animate__fadeInUp" />
              <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Últimas noticias
              </h2>
            </div>
          </div>

          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3">
              <NoticiasSidebar
                categories={categories}
                selectedCats={selectedCats}
                toggleCategory={toggleCategory}
                clearCategory={clearCategory}
              />
            </div>

            {/* Contenido principal */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="small mb-0">
                  Mostrando{' '}
                  {filteredNews.length > 0
                    ? `${(page - 1) * perPage + 1}-${Math.min(page * perPage, filteredNews.length)}`
                    : '0'}{' '}
                  de {filteredNews.length} resultados
                </p>
              </div>

              <NoticiasGrid pageNews={pageNews} />

              {totalPages > 1 && (
                <NoticiasPagination page={page} totalPages={totalPages} setPage={setPage} />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
