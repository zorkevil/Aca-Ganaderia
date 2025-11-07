export default function OurValuesSection() {
  return (
    <section id="nuestros-valores" className="py-7">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5 me-auto">
            <img
              src="/img/sections/home/home-nuestros-valores.png"
              alt="Imagen Nuestros Valores"
              title="Imagen Nuestros Valores"
              className="img-fluid w-100 wow animate__animated animate__fadeIn"
            />
          </div>

          <div className="col-lg-6">
            <hr className="heading-hr wow animate__animated animate__fadeInUp" />
            <h2 className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              Nuestros valores
            </h2>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              Reconociéndonos como una empresa que participa en todos los eslabones de la
              producción, en este caso desde nuestra óptica ganadera queremos colaborar desde la
              originación, diseñando productos, asesorando, investigando y divulgando tecnologías.
            </p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              Brindamos productos y tecnologías que posibilitan sistemas ganaderos más eficientes,
              sustentables y confortables, ayudando al productor a generar valor en cada etapa.
            </p>

            <div
              className="d-flex align-items-start gap-4 mb-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              <img src="/img/icons/home-icon-01.svg" alt="" className="flex-shrink-0 icon-64" />
              <p className="mb-0">
                Impulsamos un modelo sostenible basado en innovación, conocimiento y eficiencia.
              </p>
            </div>

            <div
              className="d-flex align-items-start gap-4 mb-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <img src="/img/icons/home-icon-02.svg" alt="" className="flex-shrink-0 icon-64" />
              <p className="mb-0">
                Nos consolidamos como plataforma de gestión que integra tecnología y saber técnico.
              </p>
            </div>

            <a
              href="#contacto"
              className="btn btn-primary wow animate__animated animate__fadeInUp"
              data-wow-delay="0.6s"
            >
              Contactános
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
