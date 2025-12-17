export function formatDateLongEs(fechaISO: string): string {
  const date = new Date(`${fechaISO}T00:00:00`);

  const dayName = date.toLocaleDateString('es-AR', {
    weekday: 'long',
  });

  const formattedDate = date.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  // Capitalizamos el día
  const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);

  return `${capitalizedDay} ${formattedDate}`;
}

export function formatTodayLongEs(): string {
  const date = new Date();

  const dayName = date.toLocaleDateString('es-AR', {
    weekday: 'long',
  });

  const day = date.toLocaleDateString('es-AR', {
    day: '2-digit',
  });

  const month = date.toLocaleDateString('es-AR', {
    month: 'long',
  });

  const year = date.getFullYear();

  const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${capitalizedDay} ${day} de ${capitalizedMonth} de ${year}`;
}
