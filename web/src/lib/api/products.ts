import { apiFetch } from '@/lib/api';
import type { ProductItem } from '@/lib/types';

type ProductsApiResponse = {
  data: ProductItem[];
};

type ProductApiResponse = {
  data: ProductItem;
};

export async function getProducts(section?: string): Promise<ProductItem[]> {
  try {
    const query = section ? `?general_category=${section}` : '';

    const response = await apiFetch<ProductsApiResponse>(`/products${query}`, {
      cache: 'no-store',
    });

    if (!response.data || response.data.length === 0) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('[getProducts] API error', error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<ProductItem | null> {
  try {
    const response = await apiFetch<ProductApiResponse>(`/products/${slug}`, {
      cache: 'no-store',
    });

    if (!response.data) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.error('[getProductBySlug] API error', error);
    return null;
  }
}
