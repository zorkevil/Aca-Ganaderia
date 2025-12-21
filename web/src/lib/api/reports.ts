import { apiFetch } from '@/lib/api';
import type { ReportsItem } from '@/lib/types';

type ReportsApiResponse = {
  data: {
    id: number;
    title: string;
    date: string;
    image: string;
    href: string;
  }[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

export async function getReports(
  page: number = 1,
  perPage: number = 10,
): Promise<ReportsApiResponse> {
  try {
    const response = await apiFetch<ReportsApiResponse>(
      `/reports?page=${page}&per_page=${perPage}`,
      { cache: 'no-store' },
    );

    return response;
  } catch (error) {
    console.error('[getReports] API error', error);
    throw error;
  }
}

// Si solo necesitas los datos sin la metadata de paginación
export async function getReportsData(
  page: number = 1,
  perPage: number = 10,
): Promise<ReportsItem[]> {
  try {
    const response = await getReports(page, perPage);

    return response.data.map((report) => ({
      id: report.id,
      title: report.title,
      date: report.date,
      image: report.image,
      href: report.href,
    }));
  } catch (error) {
    console.error('[getReportsData] API error', error);
    return [];
  }
}
