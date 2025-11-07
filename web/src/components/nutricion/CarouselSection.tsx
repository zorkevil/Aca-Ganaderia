'use client';

export default function CarouselSection() {
  return (
    <section id="carousel-secundario">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div id="nutricionCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img
                      src="/img/sections/nutricion/nutricion-carousel-bg-01.jpg"
                      className="d-block w-100"
                      alt="Ganado en el campo"
                    />
                    <div className="carousel-caption">
                      <div className="container">
                        <div className="row align-items-end">
                          <div className="col-lg-4 order-lg-1 order-2">
                            <img
                              src="/img/sections/nutricion/nutricion-carousel-producto-01.png"
                              className="carousel-product-image img-fluid wow animate__animated animate__fadeInLeft"
                              alt="Producto Nutrición"
                            />
                          </div>
                          <div className="col-lg-8 text-lg-end py-5 order-lg-2 order-1">
                            <img
                              src="/img/branding/aca-logo.svg"
                              alt="ACA Logo"
                              className="carousel-logo mb-4 wow animate__animated animate__fadeIn"
                            />
                            <h2
                              className="h1 text-white mb-3 wow animate__animated animate__fadeInUp"
                              data-wow-delay="0.2s"
                            >
                              Mejorá tu ganado con la mejor nutrición.
                            </h2>
                            <p
                              className="text-white mb-4 wow animate__animated animate__fadeInUp"
                              data-wow-delay="0.3s"
                            >
                              Producción sustentable, resultados reales. Encontrá todos nuestros
                              productos en nuestra web y dónde conseguirlos.
                            </p>
                            <a
                              href="/contacto"
                              className="btn btn-primary wow animate__animated animate__fadeInUp"
                              data-wow-delay="0.4s"
                            >
                              Contacto
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-color-4 py-3 d-flex justify-content-center align-items-center">
                <div className="carousel-indicators">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target="#nutricionCarousel"
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
