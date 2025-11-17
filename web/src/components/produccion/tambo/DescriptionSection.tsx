export default function DescriptionSection() {
  return (
    <section id="descripcion" className="py-7">
      <div className="container">
        {/* Bloque 1 */}
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-6">
            <div className="row mb-5">
              <div className="col-12">
                <hr className="heading-hr wow animate__animated animate__fadeInUp" />
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  Tambo
                </h2>
              </div>
            </div>

            <p
              className="text-color-3 fs-24 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              La producción nacional de carne está estancada desde 1970. Por diversos motivos no se
              han modificado los principales parámetros productivos. Desde aquí nuestro propósito es
              colaborar en mejorarlos. En la convicción de contar con productos, servicios y el
              asesoramiento correspondiente.
            </p>

            <ul
              className="chevron-list wow animate__animated animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              <li>
                Es uno de los pilares en que podemos colaborar en francas mejorías de los
                porcentajes de preñez y destete. A través de herramientas como el destete
                hiperprecoz y el precoz. La posibilidad de realizar suplementaciones estratégicas
                sobre la madre o en períodos del año (invierno).
              </li>
              <li>
                No hay ninguna posibilidad de mejorar los parámetros productivos, sino mejoramos los
                porcentajes de preñez y destete.
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <img
              src="/img/sections/produccion/tambo/produccion-tambo-01.webp"
              alt="Tambo"
              title="Tambo"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="row align-items-center g-4 mb-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <img
              src="/img/sections/produccion/tambo/produccion-tambo-02.webp"
              alt="Crianza"
              title="Crianza"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>

          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">Crianza</p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              Asumimos que el mejor animal siempre es el que está por nacer. Por lo tanto
              investigamos, desarrollamos y asesoramos con productos y servicios que tienen como
              único fin permitirles alcanzar y maximizar su potencial.
            </p>
          </div>
        </div>

        {/* Bloque 3 */}
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">Recría</p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              Las ganancias de peso de las vaquillonas en las recrías en la República Argentina
              suelen no ser buenas (GPD inferiores a 500 gramos). Es nuestro propósito que obtengan
              el desarrollo adecuado. Buenas recrías no darán vaquillonas preñadas a los quince
              meses, partos a los 24 meses, 90% del peso adulto. Objetivo: precocidad, fertilidad,
              productividad.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="/img/sections/produccion/tambo/produccion-tambo-03.webp"
              alt="Recría"
              title="Recría"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>

        {/* Bloque 4 */}
        <div className="row align-items-center g-4 mb-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <img
              src="/img/sections/produccion/tambo/produccion-tambo-04.webp"
              alt="Producción"
              title="Producción"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>

          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">Producción</p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              La vaca en lactancia es un atleta productivo. Bajo ese concepto, formulamos,
              asesoramos y generamos productos con el foco puesto en cuidar su metabolismo,
              garantizar su reproducción y priorizar su bienestar y salud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
