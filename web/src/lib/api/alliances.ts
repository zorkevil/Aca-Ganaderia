import { apiFetch } from '@/lib/api';
import { alianzas as alianzasMock } from '@/lib/mock';
import type { AlliancesData } from '@/lib/types';

type AlliancesApiResponse = {
  text: string | null;
  items: {
    title: string;
    img: string | null;
  }[];
};

export async function getAlliances(): Promise<AlliancesData> {
  try {
    const response = await apiFetch<AlliancesApiResponse>('/alliances', {
      cache: 'no-store',
    });

    if (!response.items || response.items.length === 0) {
      throw new Error('Empty alliances');
    }

    return {
      text:
        response.text ??
        'Las alianzas estratégicas nos permiten expandir nuestra propuesta de valor.',
      items: response.items.map((a) => ({
        title: a.title,
        img: a.img ?? '',
      })),
    };
  } catch (error) {
    console.error('[getAlliances] API error', error);

    return {
      text: 'Las alianzas estratégicas nos permiten expandir nuestra propuesta de valor, sumar capacidades y mejorar la eficiencia en todos los procesos ganaderos.',
      items: alianzasMock,
    };
  }
}
