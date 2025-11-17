'use client';

import { usePathname } from 'next/navigation';
import { whatsappContacts } from '@/lib/mock';

export default function WhatsAppButtonAuto() {
  const pathname = usePathname();

  // Detectar la sección principal
  const section = pathname.split('/')[1]; // ej: /hacienda/... → 'hacienda'

  // Buscar el número correspondiente
  const contact = whatsappContacts.find((c) => c.section === section);

  // Si no hay match → NO mostrar botón
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
