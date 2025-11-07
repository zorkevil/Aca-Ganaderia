'use client';

import { services } from '@/lib/mock';

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-7">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="row g-4">
              {services.map((a, i) => {
                const delay = (0 + i * 0.1).toFixed(1);
                return (
                  <div
                    key={a.id}
                    className="col-xl-6 wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${delay}s`}
                  >
                    <a href={a.href} className="text-decoration-none d-block h-100">
                      <div
                        className={`${a.bgClass} text-color-2 p-5 ps-7 h-100 border-top-right-radius-50 border-bottom-left-radius-50 box-hover`}
                      >
                        <div className="row h-100 flex-column-reverse flex-md-row">
                          <div className="col-md-6">
                            <h2 className="text-color-2 mb-4">{a.title}</h2>
                            <p>{a.description}</p>
                          </div>
                          <div className="col-md-6 d-flex align-items-center justify-content-md-center">
                            <img
                              src={a.icon}
                              alt={a.title}
                              className="icon-168 img-fluid mb-4 mb-md-0"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
