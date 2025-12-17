import { apiFetch } from '@/lib/api';
import type { HeroSlide } from '@/lib/types';
import { heroSlides as heroSlidesMock } from '@/lib/mock';

type HomeSlidersApiResponse = {
  data: {
    id: number;
    image: string;
    imageAlt: string;
    titleHtml: string;
    link: string | null;
    sortOrder: number;
  }[];
};

export async function getHomeSliders(): Promise<HeroSlide[]> {
  try {
    const response = await apiFetch<HomeSlidersApiResponse>('/home/sliders', { cache: 'no-store' });

    return response.data
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((slide) => ({
        id: slide.id,
        image: slide.image,
        imageAlt: slide.imageAlt || 'Slide',
        titleHtml: slide.titleHtml,
        link: slide.link ?? undefined,
      }));
  } catch (error) {
    console.error('[getHomeSliders] API error, using mock fallback', error);

    return heroSlidesMock;
  }
}
