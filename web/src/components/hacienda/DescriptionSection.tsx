export default function DescriptionSection() {
  return (
    <section id="descripcion" className="py-7">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">
              En ACA desarrollamos un ecosistema ganadero eficiente, sostenible y rentable,
              integrando todos los eslabones de la cadena: desde la cría hasta la comercialización
              de carne.
            </p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              A través del trabajo conjunto con cooperativas, productores y aliados estratégicos,
              consolidamos un modelo productivo y comercial innovador que agrega valor a cada etapa,
              con foco en la trazabilidad, la calidad y el impacto positivo en el entorno.
            </p>

            <a
              href="#servicios-hacienda"
              className="btn btn-primary wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              Ver Servicios
            </a>
          </div>

          <div className="col-lg-6">
            <img
              src="/img/sections/hacienda/hacienda-01.webp"
              alt="Hacienda Ganadera"
              title="Hacienda Ganadera"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
