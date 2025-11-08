'use client';

import type { HeroSectionProps } from '@/lib/types';

export default function HeroSection({
  title,
  showBreadcrumb = true,
  backgroundImage = '/img/sections/nutricion/nutricion-hero-bg.jpg',
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
            <h1 className="text-white mb-4 wow animate__animated animate__fadeInUp">{title}</h1>

            {showBreadcrumb && (
              <p
                className="text-white mb-0 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.1s"
              >
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>{' '}
                &gt; {title}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
