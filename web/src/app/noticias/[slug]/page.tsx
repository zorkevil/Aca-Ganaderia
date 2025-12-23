import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { transformContent } from '@/utils/transformContent';

import HeroSection from '@/components/misc/HeroSection';
import Badge from '@/components/misc/Badge';
import NoticiasSidebarRecent from '@/components/noticias/NoticiasSidebarRecent';

import { news } from '@/lib/mock';

const SECTION_NAME = 'Noticias';

// ------------------------------
// TIPADO
// ------------------------------
type Params = { slug: string };

// ------------------------------
// METADATA DINÁMICO
// ------------------------------
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);

  if (!n) return notFound();

  return {
    title: n.title ?? n.title,
    description: n.metaDescription ?? n.excerpt,
    openGraph: {
      title: n.title ?? n.title,
      description: n.metaDescription ?? n.excerpt,
      images: n.image ? [{ url: n.image }] : [],
      type: 'article',
    },
  };
}

export function getRecentNews(currentSlug: string, limit: number = 3) {
  return news
    .filter((item) => item.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// ------------------------------
// PAGINA DETALLE
// ------------------------------
export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);

  if (!n) return notFound();

  const processedContent = transformContent(n.content);
  const [year, month, day] = n.date.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  const formattedDate = date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const recentNews = getRecentNews(slug, 3);

  return (
    <main>
      <HeroSection
        title={SECTION_NAME}
        backgroundImage={'ejemplo'}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Noticias', href: '/noticias' },
          { label: n.title },
        ]}
      />

      {/* CONTENIDO */}
      <section className="py-7">
        <div className="container">
          <div className="row">
            {/* COLUMNA PRINCIPAL */}
            <div className="col-lg-9">
              {/* Imagen principal */}
              <div className="mb-5 wow animate__ animate__fadeInUp animated">
                <img src={n.image} alt={n.title} className="img-fluid w-100" />
              </div>

              <hr className="heading-hr" />
              <h1
                className="h2 mb-3 wow animate__ animate__fadeInUp animated"
                data-wow-delay="0.1s"
              >
                {n.title}
              </h1>
              <p
                className="text-color-3 fs-24 wow animate__ animate__fadeInUp animated"
                data-wow-delay="0.2s"
              >
                {n.excerpt}
              </p>

              <div
                className="d-flex align-items-center gap-3 mb-4 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
              >
                <Badge n={n} />
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-clock text-color-5"></i>
                  <span className="fs-12">{formattedDate}</span>
                </div>
              </div>

              {/* Contenido HTML completo */}
              <div
                className="noticia-content"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </div>

            {/* SIDEBAR → LO ARMAMOS LUEGO SI QUERÉS */}
            <div className="col-lg-3">
              <NoticiasSidebarRecent items={recentNews} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
