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
                  Carne
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
              src="/img/sections/produccion/carne/produccion-carne-01.webp"
              alt="Carne"
              title="Carne"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="row align-items-center g-4 mb-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <img
              src="/img/sections/produccion/carne/produccion-carne-02.webp"
              alt="Invernada"
              title="Invernada"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>

          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">Invernada</p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              En los últimos años hemos perdido más de la mitad de los novillos a nivel país. Es
              necesario apoyar la figura del invernador o colaborar con los ciclos completos a
              incorporar tecnología y/o productos para mejorar sensiblemente parámetros tales como
              kg ganados por hectárea, gpd, conversión, etc.
              <br />
              Pasturas, fertilizaciones, manejo de pastoreos, gestión de datos, forman parte de los
              ámbitos donde podemos participar y proponer alternativas como empresa.
            </p>
          </div>
        </div>

        {/* Bloque 3 */}
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-color-3 fs-24 wow animate__animated animate__fadeInUp">Feedlot</p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              Es el punto final del proceso de producción de un novillo. La Argentina pasa por el
              feed lot el 60% de los animales que se van a terminar, el porcentaje sigue en aumento.
              El feedlot unifica el animal, no lo modifica. Proponemos mejorar las Ganancias
              Promedios Diarias (GPD), la conversión, la salud del ser humano y el bienestar del
              animal. Nuestra propuesta abarca desde los productos, el asesoramiento y la producción
              propia.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="/img/sections/produccion/carne/produccion-carne-03.webp"
              alt="Feedlot"
              title="Feedlot"
              className="img-fluid w-100 border-top-left-radius-50 border-bottom-right-radius-50 wow animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
