'use client';

import { usePathname } from 'next/navigation';
import type { WhatsAppContact } from '@/lib/api/contacts';

type Props = {
  contacts: WhatsAppContact[];
};

export default function WhatsAppButton({ contacts }: Props) {
  const pathname = usePathname();
  const section = pathname.split('/')[1];

  const contact = contacts.find((c) => c.section === section);

  if (!contact) return null;

  const url = `https://wa.me/${contact.phone}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-whatsapp rounded-circle d-flex align-items-center justify-content-center"
      aria-label={`Contactar a ${contact.label} por WhatsApp`}
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
