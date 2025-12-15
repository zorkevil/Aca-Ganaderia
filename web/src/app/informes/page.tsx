import type { Metadata } from 'next';
import InformesPage from './InformesPage';

export const metadata: Metadata = {
  title: 'Informes',
  description: '',
};

export default function Noticias() {
  return <InformesPage />;
}
