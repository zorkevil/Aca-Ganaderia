import { apiFetch } from '@/lib/api';
import { services as servicesMock } from '@/lib/mock';
import type { ServicesItem } from '@/lib/types';

type ApiResponse = {
  data: ServicesItem[];
};

export async function getGeneralCategories(): Promise<ServicesItem[]> {
  try {
    const response = await apiFetch<ApiResponse>('/general-categories', {
      cache: 'no-store',
    });

    if (!response.data || response.data.length === 0) {
      return servicesMock;
    }

    return response.data;
  } catch (error) {
    console.error('[getGeneralCategories] API error', error);
    return servicesMock;
  }
}
