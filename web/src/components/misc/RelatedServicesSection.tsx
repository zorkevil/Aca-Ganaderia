'use client';

import { services } from '@/lib/mock';
import { usePathname } from 'next/navigation';
import type { RelatedServicesProps } from '@/lib/types';

export default function RelatedServicesSection({
  excludeId,
  title = 'Otros servicios de ACA Ganadería',
}: RelatedServicesProps) {
  const pathname = usePathname();

  // Inferimos el "id" por defecto desde la ruta: "/nutricion", "/sanidad", etc.
  const inferredId = pathname?.split('/').filter(Boolean)[0]; // primer segmento
  const currentId = (excludeId ?? inferredId) || null;

  // Filtramos: si tenemos currentId, lo excluimos; si no, mostramos todos
  const items = currentId ? services.filter((s) => s.id !== currentId) : services;

  return (
    <section id="otros-servicios" className="py-7">
      <div className="container text-center">
        <hr className="heading-hr mx-auto wow animate__animated animate__fadeInUp" />
        <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          {title}
        </h2>

        <div className="row justify-content-center mt-5">
          <div className="col-xxl-10">
            <div className="row g-4">
              {items.map((s, i) => {
                const delay = (i * 0.1).toFixed(1);
                return (
                  <div
                    key={s.id}
                    className="col-lg-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${delay}s`}
                  >
                    <a href={s.href} className="text-decoration-none d-block h-100">
                      <div
                        className={`${s.bgClass} text-color-2 p-4 h-100 border-top-right-radius-50 border-bottom-left-radius-50 text-center box-hover`}
                      >
                        <img src={s.icon} alt={s.title} className="icon-128 img-fluid mb-3" />
                        <h3 className="text-color-2">{s.title}</h3>
                      </div>
                    </a>
                  </div>
                );
              })}
              {items.length === 0 && (
                <div className="col-12 text-muted">No hay servicios para mostrar.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
