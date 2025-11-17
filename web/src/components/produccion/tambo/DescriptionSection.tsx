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
              La producción lechera nacional se encuentra transitando su propio cambio de modelo,
              hacia un horizonte de mayor productividad y eficiencia individual. Independiente de si
              lo hacen con pasturas o TMR, estabulados o a campo.
            </p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              Persuadidos de que es el camino necesario y correcto, nuestra propuesta es acompañar
              al productor con productos y el asesoramiento necesario que les permitan a sus vacas
              expresar su potencial.
            </p>

            <ul
              className="chevron-list wow animate__animated animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              <li>
                <strong>Foco Crianza:</strong> Nutrir a las terneras desde el primer día para que
                alcancen el máximo de su potencial.
              </li>
              <li>
                <strong>Foco Transición:</strong> Nuestra misión es acompañar y preparar en un
                momento definitorio a nuestras atletas productivas. Poniendo el foco, en su salud,
                su bienestar y su productividad.
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
