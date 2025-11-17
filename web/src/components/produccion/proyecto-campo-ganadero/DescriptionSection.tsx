export default function DescriptionSection() {
  return (
    <section id="descripcion" className="py-7">
      <div className="container">
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-6">
            <div className="row mb-5">
              <div className="col-12">
                <hr className="heading-hr wow animate__animated animate__fadeInUp" />
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  Proyecto Campo Ganadero
                </h2>
              </div>
            </div>

            <p
              className="text-color-3 fs-24 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              Estamos trabajando en un proyecto de Campo Ganadero, ubicado Ruta 8, km 210, es el
              núcleo vital de nuestra filosofía productiva, en donde se materializan los principios
              que guían nuestro enfoque agrícola.
            </p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              Aquí, los técnicos tienen la oportunidad de resolver dudas y conocer de primera mano
              los procesos productivos que aseguran un resultado óptimo. Abrimos las tranqueras a
              los productores, acompañándolos en su búsqueda constante de productividad sin riesgos.
              Un espacio que revive la esencia del trabajo rural, protegiendo y valorando el legado
              de generaciones que han hecho grande nuestro campo. Con prácticas sostenibles,
              garantizamos no solo el crecimiento de la producción, sino también el futuro de
              nuestra nación, mostrando a todos la posibilidad de replicar el éxito sin comprometer
              el medio ambiente ni las raíces que nos definen.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="/img/sections/produccion/proyecto-campo-ganadero/produccion-proyecto-campo-ganadero-01.webp"
              alt="Proyecto Campo Ganadero"
              title="Proyecto Campo Ganadero"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
