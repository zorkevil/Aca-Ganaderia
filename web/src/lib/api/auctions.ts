import { apiFetch } from '@/lib/api';
import type { RemateItem, RemateCategory } from '@/lib/types';

type AuctionsApiResponse = {
  text: string;
  items: RemateItem[];
};

export async function getAuctions(): Promise<AuctionsApiResponse | null> {
  try {
    return await apiFetch<AuctionsApiResponse>('/auctions', {
      cache: 'no-store',
    });
  } catch (error) {
    console.error('[getAuctions] API error', error);
    return null;
  }
}

export async function getAuctionModalities(): Promise<RemateCategory[]> {
  try {
    const res = await apiFetch<{ data: RemateCategory[] }>('/auctions-modalities', {
      cache: 'no-store',
    });

    return res?.data ?? [];
  } catch (error) {
    console.error('[getAuctionModalities] API error', error);
    return [];
  }
}

export async function getAuctionTypes(): Promise<RemateCategory[]> {
  try {
    const res = await apiFetch<{ data: RemateCategory[] }>('/auctions-types', {
      cache: 'no-store',
    });

    return res?.data ?? [];
  } catch (error) {
    console.error('[getAuctionTypes] API error', error);
    return [];
  }
}
