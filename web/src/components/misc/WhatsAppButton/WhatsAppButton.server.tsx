import WhatsAppButton from './WhatsAppButton';
import { getWhatsAppContacts } from '@/lib/api/contacts';

export default async function WhatsAppButtonServer() {
  const contacts = await getWhatsAppContacts();

  // Si no hay contactos → no renderizar nada
  if (!contacts || contacts.length === 0) {
    return null;
  }

  return <WhatsAppButton contacts={contacts} />;
}
