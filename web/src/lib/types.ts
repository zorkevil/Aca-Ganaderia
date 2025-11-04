export interface HeroSlide {
  id: number;
  image: string;
  imageAlt: string;
  titleHtml: string;
  subtitle?: string;
  link?: string;
}

export interface Area {
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
