import Link from 'next/link';

type Props = {
  items: any[];
};

export default function NoticiasSidebarRecent({ items }: Props) {
  return (
    <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
      <h5 className="mb-4">Noticias recientes</h5>

      {items.map((n, i) => {
        const date = new Date(n.date).toLocaleDateString('es-AR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });

        return (
          <div
            key={n.id}
            className="d-flex gap-3 mb-4 wow animate__animated animate__fadeInUp"
            data-wow-delay={`${0.1 * (i + 1)}s`}
          >
            <div className="flex-shrink-0">
              <img
                src={n.image}
                alt={n.title}
                className="border-top-left-radius-10 border-bottom-right-radius-10"
                style={{ width: 80, height: 80, objectFit: 'cover' }}
              />
            </div>

            <div className="flex-grow-1">
              <h6 className="mb-2">
                <Link href={`/noticias/${n.slug}`} className="text-color-5 text-decoration-none">
                  {n.title}
                </Link>
              </h6>

              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-clock text-color-1"></i>
                <span className="fs-12 text-color-1">{date}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
