import type { Metadata } from 'next';
import NoticiasPage from './NoticiasPage';

export const metadata: Metadata = {
  title: 'Noticias',
  description: '',
};

export default function Noticias() {
  return <NoticiasPage />;
}
