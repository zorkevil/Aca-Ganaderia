'use client';

import { useEffect, useState } from 'react';
import NewsCard from '@/components/misc/NewsCard';
import { news as mockNews } from '@/lib/mock';
import type { NewsSectionProps } from '@/lib/types';

export default function NewsSection({
  title = 'Últimas noticias',
  category,
  limit = 4,
  showButton = true,
}: NewsSectionProps) {
  const [filteredNews, setFilteredNews] = useState(mockNews);

  useEffect(() => {
    // Filtra por categoría si se indica
    let filtered = mockNews;

    if (category) {
      filtered = filtered.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    }

    // Limita cantidad
    filtered = filtered.slice(0, limit);

    setFilteredNews(filtered);
  }, [category, limit]);

  return (
    <section id="noticias" className="bg-color-15 py-7">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <hr className="heading-hr wow animate__animated animate__fadeInUp" />
            <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              {title}
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {filteredNews.length > 0 ? (
            filteredNews.map((n, i) => <NewsCard key={i} n={n} index={i} />)
          ) : (
            <div className="col-12 text-center text-muted">
              <p>No hay noticias disponibles.</p>
            </div>
          )}
        </div>

        {showButton && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <a
                href="/noticias"
                className="btn btn-primary wow animate__animated animate__fadeInUp"
                data-wow-delay="0.6s"
              >
                Ver todas las noticias
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
