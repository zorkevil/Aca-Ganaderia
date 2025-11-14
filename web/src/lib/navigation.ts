import type { NavItem, SocialLink } from './types';

export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nutrición', href: '/nutricion' },
  { label: 'Sanidad', href: '/sanidad' },
  { label: 'Hacienda', href: '#hacienda' },
  { label: 'Producción', href: '#produccion' },
  { label: 'Noticias', href: '/noticias' },
];

export const footerNavigation: NavItem[] = [...mainNavigation];

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/ACAcoop/', icon: 'bi-facebook' },
  { name: 'X', href: 'https://x.com/ACAcoop', icon: 'bi-twitter-x' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/acacoop/', icon: 'bi-linkedin' },
  { name: 'Instagram', href: 'https://www.instagram.com/acacoop', icon: 'bi-instagram' },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCqT3O1fVJfGq6ceYZTtEWMQ',
    icon: 'bi-youtube',
  },
];
