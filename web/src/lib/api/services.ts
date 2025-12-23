import { apiFetch } from '@/lib/api';
import { subservicesByArea } from '@/lib/mock';
import type { SubserviceItem } from '@/lib/types';

type ServiceApiItem = {
  icon: string | null;
  title: string;
};

type ServicesApiResponse = {
  data: ServiceApiItem[];
};

export async function getSubservicesBySection(section: string): Promise<SubserviceItem[]> {
  try {
    const response = await apiFetch<ServicesApiResponse>(`/services/${section}`, {
      cache: 'no-store',
    });

    if (!response.data || response.data.length === 0) {
      return subservicesByArea[section] || [];
    }

    return response.data.map((service) => ({
      icon: service.icon ?? '',
      title: service.title,
    }));
  } catch (error) {
    console.error('[getSubservicesBySection] API error', error);
    return subservicesByArea[section] || [];
  }
}
