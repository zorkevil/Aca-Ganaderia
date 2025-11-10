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

export type ProductItem = {
  id: number;
  sku: string;
  name: string;
  description: string;
  generalCategory: string;
  category: string;
  secondCategory: string;
  presentation: string;
  administration: string;
  dosage: string;
  image: string;
  price: number;
  sales: number;
  date: string;
};

export type ProductCategory = {
  id: string;
  name: string;
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
