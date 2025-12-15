import InformesCard from '@/components/misc/InformesCard';

export default function InformesGrid({ pageInformes }: { pageInformes: any[] }) {
  const sortedNews = [...pageInformes].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="row g-4 mb-4">
      {sortedNews.length > 0 ? (
        sortedNews.map((n, i) => (
          <InformesCard key={n.id} n={n} index={i} colClass="col-md-6 col-xl-3" />
        ))
      ) : (
        <div className="col-12 text-center py-5">
          <p className="text-color-3 fs-5">No encontramos informes</p>
        </div>
      )}
    </div>
  );
}
