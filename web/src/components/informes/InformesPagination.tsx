type Props = {
  page: number;
  totalPages: number;
  setPage: (p: number) => void;
};

export default function InformesPagination({ page, totalPages, setPage }: Props) {
  return (
    <nav aria-label="Paginación de informes">
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
