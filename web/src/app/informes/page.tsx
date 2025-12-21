// app/informes/page.tsx
import type { Metadata } from 'next';
import InformesPage from './InformesPage';
import { getReports } from '@/lib/api/reports';

export const metadata: Metadata = {
  title: 'Informes',
  description: '',
};

export default async function Informes() {
  const perPage = 9;

  const initialResponse = await getReports(1, perPage);

  return <InformesPage initialReports={initialResponse.data} initialMeta={initialResponse.meta} />;
}
