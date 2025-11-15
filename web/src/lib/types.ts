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
  slug: string;
  title: string;
  category: string;
  colorBadge?: string;
  badgeClass?: string;
  date: string; // formato ISO: "2025-10-31"
  image: string;
  excerpt: string;
  content: string;
  metaDescription: string;
}

export type SubserviceItem = {
  icon: string;
  title: string;
};

export type ProductItem = {
  id: number;
  sku: string;
  slug: string;
  name: string;
  metaDescription?: string;
  title?: string;
  subtitle?: string;
  description: string;
  generalCategory: string;
  generalCategoryName: string;
  category: string;
  iconCategory: string;
  secondCategory: string;
  presentation: string;
  administration: string;
  dosage: string;
  image: string;
  price: number;
  sales: number;
  date: string;
};

export type CarouselItem = {
  backgroundImage: string;
  productImage: string;
  productAlt: string;
  title: string;
  description: string;
  showButton?: boolean;
  buttonLabel?: string;
  buttonUrl?: string;
};

export type ProductCategory = {
  id: string;
  name: string;
};

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

// =============================================================================
// INTERFACES DE SECCIONES
// =============================================================================
export interface ContactSectionProps {
  title?: string;
  description?: string;
  submitTo?: string; // endpoint a donde se envían los datos
  noImage?: boolean;
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

export type HeroBreadcrumb = {
  label: string;
  href?: string;
};

export type HeroSectionProps = {
  title: string;
  backgroundImage?: string;
  showBreadcrumb?: boolean;
  breadcrumbs?: HeroBreadcrumb[];
};

export interface BadgeProps {
  n: any;
  className?: string;
}

export interface NewsCardProps {
  n: any;
  index: number;
  colClass?: string;
}
