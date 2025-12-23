import HaciendaTabsSection from './HaciendaTabsSection';
import { getAlliances } from '@/lib/api/alliances';
import TabMAGServer from '../tabs/TabMAG.server';

export default async function HaciendaTabsSectionServer() {
  const alliancesResponse = await getAlliances();

  // Asegúrate de siempre pasar un objeto válido
  const alliances = {
    text: alliancesResponse?.text ?? '',
    items: Array.isArray(alliancesResponse?.items) ? alliancesResponse.items : [],
  };

  // Verifica que alliances sea serializable para el cliente
  console.log('Alliances data:', alliances); // Para debug

  return <HaciendaTabsSection magTab={<TabMAGServer />} alliances={alliances} />;
}
