import { apiFetch } from '@/lib/api';
import type { MagRow } from '@/lib/types';

type MagApiResponse = {
  fecha: string;
  data: MagRow[];
};

export async function getMagPrecios(): Promise<MagApiResponse> {
  try {
    const response = await apiFetch<MagApiResponse>('/mag/precios', { cache: 'no-store' });

    return {
      fecha: response.fecha,
      data: response.data ?? [],
    };
  } catch (error) {
    console.error('[getMagPrecios] API error', error);

    return {
      fecha: '',
      data: [],
    };
  }
}
