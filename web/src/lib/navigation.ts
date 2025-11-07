export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nutrición', href: '/nutricion' },
  { label: 'Sanidad', href: '#sanidad' },
  { label: 'Hacienda', href: '#hacienda' },
  { label: 'Producción', href: '#produccion' },
  { label: 'Noticias', href: '#noticias' },
];

export const footerNavigation: NavItem[] = [...mainNavigation];

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: '#', icon: 'bi-facebook' },
  { name: 'LinkedIn', href: '#', icon: 'bi-linkedin' },
  { name: 'Instagram', href: '#', icon: 'bi-instagram' },
  { name: 'YouTube', href: '#', icon: 'bi-youtube' },
];
