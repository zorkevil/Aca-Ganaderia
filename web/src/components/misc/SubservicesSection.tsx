'use client';

import type { SubserviceItem } from '@/lib/types';

type Props = {
  title?: string;
  items: SubserviceItem[];
};

export default function SubservicesSection({ title = 'Servicios', items }: Props) {
  return (
    <section id="subservices" className="bg-color-3 text-white py-7">
      <div className="container text-center">
        <hr className="heading-hr-white mx-auto wow animate__animated animate__fadeInUp" />
        <h2 className="text-white wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          {title}
        </h2>

        <div className="row g-4 mt-4 justify-content-center">
          {items.map((s, i) => {
            const delay = (0.1 + i * 0.1).toFixed(1);
            return (
              <div
                key={i}
                className="col-sm-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
                data-wow-delay={`${delay}s`}
              >
                <img src={s.icon} alt={s.title} className="icon-128 mb-3 m-auto" />
                <h3 className="text-white">{s.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
