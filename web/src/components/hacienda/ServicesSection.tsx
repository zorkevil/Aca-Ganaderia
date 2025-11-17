'use client';

type Props = {
  title?: string;
  leftItems: string[];
  rightItems: string[];
  sectionId?: string;
};

export default function ServicesSection({
  title = 'Servicios',
  leftItems,
  rightItems,
  sectionId = 'servicios-hacienda',
}: Props) {
  return (
    <section id={sectionId} className="py-7">
      <div className="container">
        {/* Título */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <hr className="heading-hr mx-auto wow animate__animated animate__fadeInUp" />
            <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              {title}
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Columna izquierda */}
          <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <ul className="chevron-list fs-20 text-color-3">
              {leftItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Columna derecha */}
          <div className="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <ul className="chevron-list fs-20 text-color-3">
              {rightItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
