'use client';

export default function HeroSection() {
  return (
    <section
      id="internal-hero"
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundImage: "url('img/sections/nutricion/nutricion-hero-bg.jpg')" }}
    >
      <div className="container-fluid z-1">
        <div className="row">
          <div className="col text-center">
            <h1 className="text-white mb-4 wow animate__animated animate__fadeInUp">Nutrición</h1>
            <p
              className="text-white mb-0 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>{' '}
              &gt; Nutrición
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
