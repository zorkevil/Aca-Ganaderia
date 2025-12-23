import { apiFetch } from '@/lib/api';
import { MarketPresenterData } from '@/lib/types';
import { marketPresenterMock } from '@/lib/mock';

type MarketPresenterApiResponse = {
  data: {
    image: string | null;
    imageAlt: string | null;
    text: string;
  } | null;
};

export async function getMarketPresenter(): Promise<MarketPresenterData | null> {
  try {
    const response = await apiFetch<MarketPresenterApiResponse>('/market-presenter', {
      cache: 'no-store',
    });

    if (!response.data) return null;

    return {
      image: response.data.image ?? '',
      imageAlt: response.data.imageAlt ?? '',
      text: response.data.text,
    };
  } catch (error) {
    console.error('[getMarketPresenter] API error', error);

    return marketPresenterMock;
  }
}
