// app/informes/page.tsx
import type { Metadata } from 'next';
import InformesPage from './InformesPage';
import { getReports } from '@/lib/api/reports';
import { getMarketPresenter } from '@/lib/api/marketPresenter';
import { getMainBanner } from '@/lib/api/mainBanner';

export const metadata: Metadata = {
  title: 'Informes',
  description: '',
};

const SECTION_ID = 'informes';
const SECTION_NAME = 'Informes';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface InformesProps {
  searchParams: SearchParams;
}

export default async function Informes({ searchParams }: InformesProps) {
  const mainBanner = await getMainBanner(SECTION_ID);
  const perPage = 10;

  const params = await searchParams;
  const pageRaw = params?.page;

  const page =
    typeof pageRaw === 'string'
      ? parseInt(pageRaw, 10)
      : Array.isArray(pageRaw)
        ? parseInt(pageRaw[0], 10)
        : 1;

  const safePage = Number.isNaN(page) || page < 1 ? 1 : page;

  const [reportsResponse, marketPresenter] = await Promise.all([
    getReports(safePage, perPage),
    getMarketPresenter(),
  ]);

  return (
    <InformesPage
      reports={reportsResponse.data}
      meta={reportsResponse.meta}
      page={safePage}
      marketPresenter={marketPresenter}
      mainBanner={mainBanner}
    />
  );
}
