'use client';

import { heroSlides } from '@/lib/mock';

export default function HeroSection() {
  return (
    <section id="home-hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : undefined}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="carousel-inner">
                {heroSlides.map((slide, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img src={slide.image} className="d-block w-100" alt={slide.imageAlt} />
                    <div className="carousel-caption">
                      <img
                        src="/img/branding/aca-logo.svg"
                        alt="ACA Logo"
                        className="carousel-logo img-fluid mb-4 wow animate__animated animate__fadeInLeft"
                      />
                      <h2
                        className="h1 text-white wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.2s"
                        dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
