import NewsCard from '@/components/misc/NewsCard';

export default function NoticiasGrid({ pageNews }: { pageNews: any[] }) {
  return (
    <div className="row g-4 mb-4">
      {pageNews.length > 0 ? (
        pageNews.map((n, i) => <NewsCard key={n.id} n={n} index={i} colClass="col-md-6 col-xl-4" />)
      ) : (
        <div className="col-12 text-center py-5">
          <p className="text-color-3 fs-5">No encontramos noticias</p>
        </div>
      )}
    </div>
  );
}
