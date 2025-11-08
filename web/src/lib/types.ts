// =============================================================================
// INTERFACES DE DATOS
// =============================================================================
export interface HeroSlide {
  id: number;
  image: string;
  imageAlt: string;
  titleHtml: string;
  subtitle?: string;
  link?: string;
}

export interface ServicesItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorBg?: string;
  bgClass?: string;
  href: string;
  order?: number;
}

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  colorBadge?: string;
  badgeClass?: string;
  date: string; // formato ISO: "2025-10-31"
  image: string;
  excerpt: string;
  href: string;
}

export type SubserviceItem = {
  icon: string;
  title: string;
};

// =============================================================================
// INTERFACES DE SECCIONES
// =============================================================================
export interface ContactSectionProps {
  title?: string;
  description?: string;
  submitTo?: string; // endpoint a donde se envían los datos
}

export interface NewsSectionProps {
  title?: string;
  category?: string;
  limit?: number;
  showButton?: boolean;
}

export interface RelatedServicesProps {
  excludeId?: string;
  title?: string;
}

export interface HeroSectionProps {
  title: string;
  showBreadcrumb?: boolean;
  backgroundImage?: string;
}
