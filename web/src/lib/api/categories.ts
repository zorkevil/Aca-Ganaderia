import { apiFetch } from '@/lib/api';
import type { ProductCategory } from '@/lib/types';

type CategoriesApiResponse = {
  data: ProductCategory[];
};

export async function getCategories(section?: string): Promise<ProductCategory[]> {
  try {
    const query = section ? `?general_category=${section}` : '';

    const response = await apiFetch<CategoriesApiResponse>(`/categories${query}`, {
      cache: 'no-store',
    });

    if (!response.data || response.data.length === 0) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('[getCategories] API error', error);
    return [];
  }
}
