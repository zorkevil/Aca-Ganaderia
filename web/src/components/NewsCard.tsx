import Badge from '@/components/Badge';

export default function NewsCard({ n, index }: { n: any; index: number }) {
  const delay = (0.2 + index * 0.1).toFixed(1);
  const date = new Date(n.date);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('es-AR', { month: 'short' }).toUpperCase();
  const imageSrc = n.image?.trim() ? n.image : '/img/sections/noticias/news-placeholder.jpg';

  return (
    <div
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
          <a href={n.href} className="btn btn-link mt-auto">
            Ver noticia
          </a>
        </div>
      </div>
    </div>
  );
}
