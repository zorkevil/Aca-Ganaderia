import HaciendaTabsSection from './HaciendaTabsSection';
import { getAlliances } from '@/lib/api/alliances';
import TabMAGServer from '../tabs/tabMAG.server';

export default async function HaciendaTabsSectionServer() {
  const alliancesResponse = await getAlliances();

  const alliances = {
    text: alliancesResponse?.text ?? '',
    items: Array.isArray(alliancesResponse?.items) ? alliancesResponse.items : [],
  };

  return <HaciendaTabsSection magTab={<TabMAGServer />} alliances={alliances} />;
}
