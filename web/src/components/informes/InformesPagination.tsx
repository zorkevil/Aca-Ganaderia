'use client';

import Link from 'next/link';

type Props = {
  page: number;
  totalPages: number;
};

export default function InformesPagination({ page, totalPages }: Props) {
  return (
    <nav aria-label="Paginación de informes">
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNumber = i + 1;

          return (
            <li key={pageNumber} className={`page-item ${page === pageNumber ? 'active' : ''}`}>
              <Link href={`/informes?page=${pageNumber}`} className="page-link">
                {pageNumber}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
