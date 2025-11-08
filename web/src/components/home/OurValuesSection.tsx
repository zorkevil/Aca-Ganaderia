'use client';

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
              Reconociéndonos como una empresa que participa de una o de otra manera en todos los
              eslabones de la producción, en este caso desde nuestra óptica ganadera queremos
              colaborar desde la mismísima originación, diseñando productos, asesorando,
              investigando, divulgando tecnologías o participando en la cadena productiva. Teniendo
              como objetivo fundamental colaborar con el productor en la generación de valor que le
              permitan obtener un esquema de producción sustentable y nosotros transformarnos en una
              cadena se suministro seguro
            </p>

            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              Brindar productos, información y tecnologías que posibiliten a los sistemas ganaderos,
              una mayor producción, ser más eficientes, más confortables para el ser humano y
              absolutamente sustentables. Ayudar a lograr mejoras sensibles en la captura de valor
              del producto final. Transformarnos en una cadena de suministros segura.
            </p>

            <div
              className="d-flex align-items-start gap-4 mb-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              <img src="/img/icons/home-icon-01.svg" alt="" className="flex-shrink-0 icon-64" />
              <p className="mb-0">
                Impulsamos un modelo sostenible basado en innovación y conocimiento, con foco en la
                eficiencia, el valor agregado y el crecimiento colaborativo, generando retornos
                sólidos sobre el capital invertido.
              </p>
            </div>

            <div
              className="d-flex align-items-start gap-4 mb-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <img src="/img/icons/home-icon-02.svg" alt="" className="flex-shrink-0 icon-64" />
              <p className="mb-0">
                Aspiramos a consolidarnos como una plataforma de gestión de alto rendimiento, que
                integra tecnología y saber técnico para ofrecer soluciones y productos que se
                alineen con las demandas de la cadena de valor.
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
