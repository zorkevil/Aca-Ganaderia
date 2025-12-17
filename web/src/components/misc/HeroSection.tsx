'use client';

import type { HeroSectionProps } from '@/lib/types';
import { normalizeHeroTitle } from '@/utils/transformTextSlider';

export default function HeroSection({
  title,
  showBreadcrumb = true,
  backgroundImage = '/img/sections/nutricion/nutricion-hero-bg.jpg',
  breadcrumbs = [],
}: HeroSectionProps) {
  return (
    <section
      id="internal-hero"
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container-fluid z-1">
        <div className="row">
          <div className="col text-center">
            <h1
              className="text-white mb-4 wow animate__animated animate__fadeInUp"
              dangerouslySetInnerHTML={{
                __html: normalizeHeroTitle(title),
              }}
            />

            {showBreadcrumb && breadcrumbs.length > 0 && (
              <p
                className="text-white mb-0 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.1s"
              >
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <span key={index}>
                      {crumb.href && !isLast ? (
                        <a href={crumb.href} className="text-white text-decoration-none">
                          {crumb.label}
                        </a>
                      ) : (
                        <span>{crumb.label}</span>
                      )}

                      {!isLast && <span> &gt; </span>}
                    </span>
                  );
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
