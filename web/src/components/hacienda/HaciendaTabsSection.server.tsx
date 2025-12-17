import HaciendaTabsSectionClient from './HaciendaTabsSection';
import TabMAGServer from './tabs/tabMAG.server';

export default async function HaciendaTabsSectionServer() {
  return <HaciendaTabsSectionClient magTab={<TabMAGServer />} />;
}
