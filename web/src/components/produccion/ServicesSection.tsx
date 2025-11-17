import Link from 'next/link';
import type { ServicesProduccionItem } from '@/lib/types';

type Props = {
  servicesProduccion: ServicesProduccionItem[];
};

export default function ServicesSection({ servicesProduccion }: Props) {
  return (
    <section id="servicios-produccion" className="py-7">
      <div className="container">
        {/* Título */}
        <div className="row mb-5">
          <div className="col-12">
            <hr className="heading-hr wow animate__animated animate__fadeInUp" />
            <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              Servicios de Producción
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="row g-4">
              {servicesProduccion.map((item, i) => {
                const delay = (0.2 + i * 0.1).toFixed(1);

                return (
                  <div
                    key={item.id}
                    className="col-lg-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${delay}s`}
                  >
                    <Link href={item.href} className="text-decoration-none d-block">
                      <div
                        className="produccion-servicio-box border-top-right-radius-50 border-bottom-left-radius-50 box-hover mb-3"
                        style={{
                          backgroundImage: `url('${item.img}')`,
                        }}
                      ></div>

                      <h3 className="text-color-3 text-center">{item.title}</h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
