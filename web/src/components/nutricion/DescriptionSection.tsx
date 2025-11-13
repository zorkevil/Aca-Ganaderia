'use client';

export default function DescriptionSection() {
  return (
    <section id="descripcion" className="py-7">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">
              Desde esta unidad nos proponemos atender y acompañar todas las etapas de la vida
              productiva de su animal. Poniendo el foco siempre en los momentos vitales de ese
              desarrollo. En las primeras etapas de vida como la <strong>Crianza</strong> o el{' '}
              <strong>Destete Hiperprecoz</strong> o <strong>Precoz</strong>.
            </p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              En las recrías con concentrados proteicos y premezclas. En la etapa productiva con
              premezclas para el preparto y la lactancia y en la finalización con premezclas para
              usar en el engorde a corral o concentrados para autoconsumo.
            </p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              Sabiendo que detrás de cada producto trataremos de brindarle el mejor asesoramiento a
              través de nuestros profesionales.
            </p>
            <a
              href="#productos-nutricion"
              className="btn btn-primary wow animate__animated animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              Ver productos
            </a>
          </div>

          <div className="col-lg-6">
            <img
              src="/img/sections/nutricion/nutricion-img.webp"
              alt="Nutrición Ganadera"
              title="Nutrición Ganadera"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
