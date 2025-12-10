'use client';

import type { CarouselItem } from '@/lib/types';

type Props = {
  id?: string;
  items: CarouselItem[];
};

export default function CarouselSection({ id = 'carousel-secundario', items }: Props) {
  return (
    <section id={`${id}-section`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div id={id} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {items.map((item, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img src={item.backgroundImage} className="d-block w-100" alt={item.title} />

                    <div className="carousel-caption">
                      <div className="container">
                        <div className="row align-items-end">
                          <div className="col-lg-5 order-lg-1 order-2">
                            <img
                              src={item.productImage}
                              className="carousel-product-image img-fluid wow animate__animated animate__fadeInLeft"
                              alt={item.productAlt}
                            />
                          </div>

                          <div className="col-lg-7 ms-auto text-lg-end py-5 order-lg-2 order-1">
                            <img
                              src="/img/branding/aca-logo.svg"
                              alt="ACA Logo"
                              className="carousel-logo ms-lg-auto mb-4 wow animate__animated animate__fadeIn"
                            />
                            <h2
                              className="h1 text-white mb-3 wow animate__animated animate__fadeInUp"
                              data-wow-delay="0.2s"
                            >
                              {item.title}
                            </h2>
                            <p
                              className="text-white mb-4 wow animate__animated animate__fadeInUp"
                              data-wow-delay="0.3s"
                            >
                              {item.description}
                            </p>

                            {item.showButton && item.buttonLabel && item.buttonUrl && (
                              <a
                                href={item.buttonUrl}
                                className="btn btn-primary wow animate__animated animate__fadeInUp"
                                data-wow-delay="0.4s"
                              >
                                {item.buttonLabel}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores */}
              <div className="bg-color-4 py-3 d-flex justify-content-center align-items-center">
                <div className="carousel-indicators">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target={`#${id}`}
                      data-bs-slide-to={i}
                      className={i === 0 ? 'active' : ''}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
