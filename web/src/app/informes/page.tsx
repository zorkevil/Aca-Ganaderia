// app/informes/page.tsx
import type { Metadata } from 'next';
import InformesPage from './InformesPage';
import { getReports } from '@/lib/api/reports';

export const metadata: Metadata = {
  title: 'Informes',
  description: '',
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface InformesProps {
  searchParams: SearchParams;
}

export default async function Informes({ searchParams }: InformesProps) {
  const perPage = 10;

  // Await searchParams first
  const params = await searchParams;
  const pageRaw = params?.page;

  const page =
    typeof pageRaw === 'string'
      ? parseInt(pageRaw, 10)
      : Array.isArray(pageRaw)
        ? parseInt(pageRaw[0], 10)
        : 1;

  const safePage = Number.isNaN(page) || page < 1 ? 1 : page;

  const response = await getReports(safePage, perPage);

  return <InformesPage reports={response.data} meta={response.meta} page={safePage} />;
}
