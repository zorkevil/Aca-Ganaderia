import type { InformesCardProps } from '@/lib/types';
import { parseLocalDate } from '@/lib/date';

export default function InformesCard({
  n,
  index,
  colClass = 'col-md-6 col-xl-3',
}: InformesCardProps) {
  const delay = (0.2 + index * 0.1).toFixed(1);
  const date = parseLocalDate(n.date);

  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('es-AR', { month: 'short' }).toUpperCase();

  const imageSrc = n.image?.trim() ? n.image : '/img/sections/informes/informes-imagen-bg.jpg';

  return (
    <div
      className={`${colClass} wow animate__animated animate__fadeInUp`}
      data-wow-delay={`${delay}s`}
    >
      <div className="h-100 position-relative border border-color-3 overflow-hidden border-top-right-radius-50 border-bottom-left-radius-50 bg-white">
        <a href={n.href} target="_blank" rel="noopener noreferrer" className="stretched-link" />

        <div className="position-relative">
          <img
            src={imageSrc}
            className="w-100 wow animate__animated animate__fadeIn"
            alt={n.title}
          />
          <div className="position-absolute top-0 start-0 bg-color-6 text-white p-2">
            <div className="fs-32 fw-semibold lh-1">{day}</div>
            <div className="fs-18 fw-semibold lh-1">{month}</div>
          </div>
        </div>

        <div className="p-3 d-flex flex-column text-center">
          <h4 className="text-color-3">{n.title}</h4>
          <p className="small flex-grow-1 mb-2">{n.excerpt}</p>

          <a
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-link mt-auto"
          >
            Ver Informe
          </a>
        </div>
      </div>
    </div>
  );
}
