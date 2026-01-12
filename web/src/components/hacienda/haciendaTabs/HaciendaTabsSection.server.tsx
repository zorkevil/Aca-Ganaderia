import HaciendaTabsSection from './HaciendaTabsSection';
import TabMAGServer from '../tabs/tabMAG.server';

import { getAlliances } from '@/lib/api/alliances';
import { getAuctions, getAuctionModalities, getAuctionTypes } from '@/lib/api/auctions';

export default async function HaciendaTabsSectionServer() {
  const alliancesResponse = await getAlliances();
  const auctionsResponse = await getAuctions();
  const auctionModalities = await getAuctionModalities();
  const auctionTypes = await getAuctionTypes();

  const alliances = {
    text: alliancesResponse?.text ?? '',
    items: Array.isArray(alliancesResponse?.items) ? alliancesResponse.items : [],
  };

  const auctions = {
    text: auctionsResponse?.text ?? '',
    items: Array.isArray(auctionsResponse?.items) ? auctionsResponse.items : [],
  };

  return (
    <HaciendaTabsSection
      magTab={<TabMAGServer />}
      alliances={alliances}
      auctions={auctions}
      auctionModalities={auctionModalities}
      auctionTypes={auctionTypes}
    />
  );
}
