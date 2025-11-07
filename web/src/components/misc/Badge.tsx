import React from 'react';

// Utilidad para contraste
function getContrastColor(hexColor: string): string {
  if (!hexColor) return '#fff';
  const color = hexColor.replace('#', '');
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#000' : '#fff';
}

export default function Badge({ n }: { n: any }) {
  const hasClass = !!n.badgeClass;
  const hasColor = !!n.colorBadge;

  const badgeClass = hasClass ? n.badgeClass : !hasColor ? 'bg-color-1' : '';

  const badgeStyle = hasClass
    ? undefined
    : hasColor
      ? {
          backgroundColor: n.colorBadge,
          color: getContrastColor(n.colorBadge),
        }
      : undefined;

  return (
    <span className={`badge small mb-2 align-self-center ${badgeClass}`} style={badgeStyle}>
      {n.category}
    </span>
  );
}
