import { apiFetch } from '@/lib/api';
import type { ProductCategory } from '@/lib/types';

type SubcategoriesApiResponse = {
  data: ProductCategory[];
};

export async function getSubcategories(
  section?: string,
  category?: string,
): Promise<ProductCategory[]> {
  try {
    const params = new URLSearchParams();

    if (section) params.append('general_category', section);
    if (category) params.append('category', category);

    const response = await apiFetch<SubcategoriesApiResponse>(
      `/subcategories?${params.toString()}`,
      { cache: 'no-store' },
    );

    if (!response.data || response.data.length === 0) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('[getSubcategories] API error', error);
    return [];
  }
}
