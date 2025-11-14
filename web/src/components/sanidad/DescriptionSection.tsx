export default function DescriptionSection() {
  return (
    <section id="descripcion" className="py-7">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">
              Estamos donde debemos estar y hacemos lo que hay que hacer.
            </p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              Con presencia en el lugar y momento indicados, con acciones alineadas a nuestra
              misión, focalizados en la permanente evolución de insumos y servicios para el
              profesional veterinario y productor ganadero, logramos el reconocimiento del mercado.
              Cumplimos nuestro rol, y por eso, el mercado nos elige y valora.
            </p>
            <a
              href="#productos-sanidad"
              className="btn btn-primary wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              Ver productos
            </a>
          </div>

          <div className="col-lg-6">
            <img
              src="/img/sections/sanidad/sanidad-img.webp"
              alt="Sanidad Ganadera"
              title="Sanidad Ganadera"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
