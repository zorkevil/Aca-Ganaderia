import { NextResponse } from 'next/server';
import { apiFetch } from '@/lib/api';

type ContactPayload = {
  nombre: string | null;
  apellido: string | null;
  email: string | null;
  telefono: string | null;
  rol: string | null;
  otro_rol: string | null;
  localidad: string | null;
  area: string | null;
  mensaje: string | null;
  section: string | null;
};

export async function POST(req: Request) {
  try {
    const payload: ContactPayload = await req.json();

    // Validación mínima server-side
    if (!payload.email || !payload.mensaje) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    await apiFetch('/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      auth: true,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[POST /api/contact]', error);

    return NextResponse.json({ error: 'Error al enviar el formulario' }, { status: 500 });
  }
}
