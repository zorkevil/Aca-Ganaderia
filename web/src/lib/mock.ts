import type { HeroSlide, ServicesItem, NewsItem, SubserviceItem } from './types';

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/img/sections/home/home-hero-bg-1.jpg',
    imageAlt: 'Ganado en el campo',
    titleHtml:
      'La ganadería que imaginás, con el respaldo que estás <span class="text-color-4">buscando</span>.',
  },
  {
    id: 2,
    image: '/img/sections/home/home-hero-bg-1.jpg',
    imageAlt: 'Ganado en el campo',
    titleHtml:
      'La ganadería que imaginás, con el respaldo que estás <span class="text-color-4">buscando</span>.',
  },
  {
    id: 3,
    image: '/img/sections/home/home-hero-bg-1.jpg',
    imageAlt: 'Ganado en el campo',
    titleHtml:
      'La ganadería que imaginás, con el respaldo que estás <span class="text-color-4">buscando</span>.',
  },
];

export const services: ServicesItem[] = [
  {
    id: 'nutricion',
    title: 'Nutrición',
    description:
      'Nos proponemos atender y acompañar todas las etapas de la vida productiva de su animal y en las primeras etapas de vida como la Crianza o el Destete Hiperprecoz o Precoz.',
    bgClass: 'bg-color-7 nutricion-bg',
    icon: '/img/icons/icon-nutricion.svg',
    href: '/nutricion',
  },
  {
    id: 'sanidad',
    title: 'Sanidad',
    description:
      'En ACA desarrollamos un ecosistema ganadero eficiente, sostenible y rentable, integrando todos los eslabones de la cadena productiva.',
    bgClass: 'bg-color-9 sanidad-bg',
    icon: '/img/icons/icon-sanidad.svg',
    href: '/sanidad',
  },
  {
    id: 'hacienda',
    title: 'Hacienda',
    description:
      'Consolidamos un modelo productivo y comercial innovador que agrega valor a cada etapa, con foco en la trazabilidad, la calidad y el impacto positivo en el entorno.',
    bgClass: 'bg-color-11 hacienda-bg',
    icon: '/img/icons/icon-hacienda.svg',
    href: '/hacienda',
  },
  {
    id: 'produccion',
    href: '/produccion',
    title: 'Producción',
    description:
      'Compartimos soluciones y asesoramiento para potenciar cada etapa de la cadena ganadera y láctea, ayudando a productores y asesores a lograr mejores resultados.',
    bgClass: 'bg-color-13 produccion-bg',
    icon: '/img/icons/icon-produccion.svg',
  },
];

export const news: NewsItem[] = [
  {
    id: 1,
    title: 'ACA Ganadera impulsa la innovación en el sector',
    category: 'Nutrición',
    colorBadge: '',
    badgeClass: 'bg-color-7',
    date: '2025-08-19',
    image: '',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    href: '#',
  },
  {
    id: 2,
    title: 'ACA Ganadera impulsa la innovación en el sector',
    category: 'Sanidad',
    colorBadge: '',
    badgeClass: 'bg-color-9',
    date: '2025-08-19',
    image: '',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    href: '#',
  },
  {
    id: 3,
    title: 'ACA Ganadera impulsa la innovación en el sector',
    category: 'Hacienda',
    badgeClass: 'bg-color-11',
    date: '2025-08-19',
    image: '',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    href: '#',
  },
  {
    id: 4,
    title: 'ACA Ganadera impulsa la innovación en el sector',
    category: 'Producción',
    badgeClass: 'bg-color-13',
    date: '2025-08-19',
    image: '',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    href: '#',
  },
];

export const subservicesByArea: Record<string, SubserviceItem[]> = {
  nutricion: [
    {
      icon: '/img/icons/icon-asesoramiento-en-produccion.svg',
      title: 'Asesoramiento en producción',
    },
    {
      icon: '/img/icons/icon-asesoramiento-en-formulacion-de-raciones.svg',
      title: 'Asesoramiento en formulación de raciones',
    },
    {
      icon: '/img/icons/icon-analisis-completo-de-raciones-o-materias-primas.svg',
      title: 'Análisis completo de raciones o materias primas',
    },
    {
      icon: '/img/icons/icon-venta-de-materias-primas-especificas.svg',
      title: 'Venta de materias primas específicas',
    },
  ],
};
