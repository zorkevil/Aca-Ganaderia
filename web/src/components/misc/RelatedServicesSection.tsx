'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import type { RelatedServicesProps, ServicesItem } from '@/lib/types';

type Props = RelatedServicesProps & {
  items: ServicesItem[];
};

export default function RelatedServicesSection({
  excludeId,
  title = 'Otros servicios de ACA Ganadería',
  items,
}: Props) {
  const pathname = usePathname();
  const inferredId = pathname?.split('/').filter(Boolean)[0] ?? null;
  const currentId = excludeId || inferredId;

  const filteredServices = useMemo(() => {
    const base = currentId ? items.filter((s) => s.id !== currentId) : items;

    return [...base].sort((a, b) => a.title.localeCompare(b.title, 'es'));
  }, [items, currentId]);

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
              {filteredServices.length > 0 ? (
                filteredServices.map((s, i) => {
                  const delay = (0.1 + i * 0.1).toFixed(1);

                  return (
                    <div
                      key={s.id}
                      className="col-lg-4 wow animate__animated animate__fadeInUp"
                      data-wow-delay={`${delay}s`}
                    >
                      <a href={s.href} className="text-decoration-none d-block h-100">
                        <div
                          className={`${s.bgClass} servicio-box text-color-2 p-4 h-100 border-top-right-radius-50 border-bottom-left-radius-50 text-center box-hover`}
                        >
                          <img
                            src={s.icon}
                            alt={s.title}
                            className="icon-128 img-fluid mb-3 m-auto opacity-75"
                          />
                          <h3 className="text-color-2">{s.title}</h3>
                        </div>
                      </a>
                    </div>
                  );
                })
              ) : (
                <div className="col-12 text-muted">No hay servicios para mostrar.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
