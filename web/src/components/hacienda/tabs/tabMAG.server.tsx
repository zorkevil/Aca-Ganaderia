import TabMAG from './tabMAG';
import { getMagPrecios } from '@/lib/api/mag';

export default async function TabMAGServer() {
  const { fecha, data } = await getMagPrecios();

  return <TabMAG fecha={fecha} data={data} />;
}
