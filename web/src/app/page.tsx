import { heroSlides, areas, news } from '@/lib/home';
import Badge from '@/components/Badge';

/*
// Futuro:
import { getHeroSlides, getAreas, getLatestNews } from "@/lib/api";

const heroSlides = await getHeroSlides();
const areas = await getAreas();
const news = await getLatestNews();
*/

export default function HomePage() {
  return (
    <main>
      <h1 className="visually-hidden">Soluciones y servicios para el sector ganadero</h1>

      {/* Hero Section */}
      <section id="home-hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0">
              <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target="#heroCarousel"
                      data-bs-slide-to={i}
                      className={i === 0 ? 'active' : ''}
                      aria-current={i === 0 ? 'true' : undefined}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="carousel-inner">
                  {heroSlides.map((slide, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                      <img src={slide.image} className="d-block w-100" alt={slide.imageAlt} />
                      <div className="carousel-caption">
                        <img
                          src="/img/branding/aca-logo.svg"
                          alt="ACA Logo"
                          className="carousel-logo img-fluid mb-4 wow animate__animated animate__fadeInLeft"
                        />
                        <h2
                          className="h1 text-white wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.2s"
                          dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros valores */}
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
                investigando, divulgando tecnologías o participando en la cadena productiva.
                Teniendo como objetivo fundamental colaborar con el productor en la generación de
                valor que le permitan obtener un esquema de producción sustentable y nosotros
                transformarnos en una cadena se suministro seguro.
              </p>
              <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                Brindar productos, información y tecnologías que posibiliten a los sistemas
                ganaderos, una mayor producción, ser más eficientes, más confortables para el ser
                humano y absolutamente sustentables. Ayudar a lograr mejoras sensibles en la captura
                de valor del producto final. Transformarnos en una cadena de suministros segura.
              </p>

              <div
                className="d-flex align-items-start gap-4 mb-4 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.4s"
              >
                <img src="/img/icons/home-icon-01.svg" alt="" className="flex-shrink-0 icon-64" />
                <p className="mb-0">
                  Impulsamos un modelo sostenible basado en innovación y conocimiento, con foco en
                  la eficiencia, el valor agregado y el crecimiento colaborativo, generando retornos
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

      {/* Servicios */}
      <section id="servicios" className="py-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="row g-4">
                {areas.map((a, i) => {
                  const delay = (0 + i * 0.1).toFixed(1);
                  return (
                    <div
                      key={a.id}
                      className="col-xl-6 wow animate__animated animate__fadeInUp"
                      data-wow-delay={`${delay}s`}
                    >
                      <a href={a.href} className="text-decoration-none d-block h-100">
                        <div
                          className={`${a.bgClass} text-color-2 p-5 ps-7 h-100 border-top-right-radius-50 border-bottom-left-radius-50 box-hover`}
                        >
                          <div className="row h-100 flex-column-reverse flex-md-row">
                            <div className="col-md-6">
                              <h2 className="text-color-2 mb-4">{a.title}</h2>
                              <p>{a.description}</p>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-md-center">
                              <img
                                src={a.icon}
                                alt={a.title}
                                className="icon-168 img-fluid mb-4 mb-md-0"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas Noticias */}
      <section id="noticias" className="bg-color-15 py-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <hr className="heading-hr wow animate__animated animate__fadeInUp" />
              <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Últimas noticias
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {news.map((n, i) => {
              const delay = (0.2 + i * 0.1).toFixed(1);

              // Formatear fecha (día y mes)
              const date = new Date(n.date);
              const day = date.getDate().toString().padStart(2, '0');
              const month = date.toLocaleString('es-AR', { month: 'short' }).toUpperCase();

              // Imagen con fallback si está vacía
              const imageSrc =
                n.image && n.image.trim() !== ''
                  ? n.image
                  : '/img/sections/noticias/news-placeholder.jpg';

              return (
                <div
                  key={i}
                  className="col-md-6 col-xl-3 wow animate__animated animate__fadeInUp"
                  data-wow-delay={`${delay}s`}
                >
                  <div className="h-100 border border-color-3 overflow-hidden border-top-right-radius-50 border-bottom-left-radius-50 bg-white">
                    <div className="position-relative">
                      <img
                        src={imageSrc}
                        className="w-100 wow animate__animated animate__fadeIn"
                        alt={n.title}
                      />
                      <div className="position-absolute top-0 start-0 bg-color-6 text-white p-3">
                        <div className="fs-40 fw-semibold lh-1">{day}</div>
                        <div className="fs-24 fw-semibold lh-1">{month}</div>
                      </div>
                    </div>
                    <div className="p-3 d-flex flex-column text-center">
                      <h4 className="text-color-3">{n.title}</h4>
                      <Badge n={n} />
                      <p className="text-color-1 small flex-grow-1 mb-2">{n.excerpt}</p>
                      <a href={`${n.href}`} className="btn btn-link mt-auto">
                        Ver noticia
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <a
                href="/noticias"
                className="btn btn-primary wow animate__animated animate__fadeInUp"
                data-wow-delay="0.6s"
              >
                Ver todas las noticias
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-color-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 contacto-bg border-top-right-radius-40 wow animate__animated animate__fadeIn"></div>

            <div className="col-lg-6 contacto-form-pe contacto-content-bg py-7 ps-lg-5">
              <hr className="heading-hr mb-4 wow animate__animated animate__fadeInUp" />
              <h2 className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                Contacto
              </h2>
              <p className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                Si querés recibir asesoramiento o conocer nuestras soluciones adaptadas a tu
                producción, completá este breve formulario.
              </p>

              <form>
                <div className="row">
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Nombre"
                        required
                      />
                      <label htmlFor="nombre">Nombre</label>
                    </div>
                  </div>
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        placeholder="Apellido"
                        required
                      />
                      <label htmlFor="apellido">Apellido</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="celular"
                        placeholder="Celular"
                        required
                      />
                      <label htmlFor="celular">Celular</label>
                    </div>
                  </div>
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="E-mail"
                        required
                      />
                      <label htmlFor="email">E-mail</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="form-floating">
                      <select className="form-select tom-select" id="rol" required defaultValue="">
                        <option value=""></option>
                        <option value="productor">Productor</option>
                        <option value="asesor">Asesor</option>
                        <option value="ingeniero-agronomo">Ingeniero Agrónomo</option>
                        <option value="veterinario">Veterinario</option>
                        <option value="otro">Otro</option>
                      </select>
                      <label htmlFor="rol">Rol</label>
                    </div>
                  </div>
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="localidad"
                        placeholder="Localidad"
                        required
                      />
                      <label htmlFor="localidad">Localidad</label>
                    </div>
                  </div>
                </div>

                <div className="row" id="otro-rol-container" style={{ display: 'none' }}>
                  <div className="col-md-6 mb-4 wow animate__animated animate__fadeInUp">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="otro-rol"
                        placeholder="Otro"
                      />
                      <label htmlFor="otro-rol">Otro</label>
                    </div>
                  </div>
                </div>

                <div className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="mensaje"
                      placeholder="Mensaje"
                      rows={4}
                      required
                    ></textarea>
                    <label htmlFor="mensaje">Mensaje: ¿Qué te gustaría consultar?</label>
                  </div>
                </div>

                <div
                  className="text-end wow animate__animated animate__fadeInUp"
                  data-wow-delay="1s"
                >
                  <button type="submit" className="btn btn-primary">
                    Contacto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
