import { apiFetch } from '@/lib/api';

export type WhatsAppContact = {
  section: string;
  phone: string;
  label: string;
};

type ContactsApiResponse = {
  data: WhatsAppContact[];
};

export async function getWhatsAppContacts(): Promise<WhatsAppContact[]> {
  try {
    const response = await apiFetch<ContactsApiResponse>('/contacts', {
      cache: 'no-store',
    });

    // Si la API responde pero no hay datos
    if (!response.data || response.data.length === 0) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('[getWhatsAppContacts] API error', error);

    return [];
  }
}
