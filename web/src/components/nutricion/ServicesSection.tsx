'use client';

const services = [
  {
    icon: '/img/icons/icon-asesoramiento-en-produccion.svg',
    title: 'Asesoramiento en producción',
    delay: '0.2s',
  },
  {
    icon: '/img/icons/icon-asesoramiento-en-formulacion-de-raciones.svg',
    title: 'Asesoramiento en formulación de raciones',
    delay: '0.3s',
  },
  {
    icon: '/img/icons/icon-analisis-completo-de-raciones-o-materias-primas.svg',
    title: 'Análisis completo de raciones o materias primas',
    delay: '0.4s',
  },
  {
    icon: '/img/icons/icon-venta-de-materias-primas-especificas.svg',
    title: 'Venta de materias primas específicas',
    delay: '0.5s',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios-nutricion" className="bg-color-3 text-white py-7">
      <div className="container text-center">
        <hr className="heading-hr-white mx-auto wow animate__animated animate__fadeInUp" />
        <h2 className="text-white wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          Servicios
        </h2>

        <div className="row g-4 mt-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="col-sm-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
              data-wow-delay={s.delay}
            >
              <img src={s.icon} alt={s.title} className="icon-128 mb-3" />
              <h3 className="text-white">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
