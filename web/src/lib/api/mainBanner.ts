import { apiFetch } from '@/lib/api';
import { heroImagesBySection } from '@/lib/mock';
import { MainBannerData } from '@/lib/types';

type MainBannerApiResponse = {
  data: {
    section: string;
    image: string | null;
    imageAlt: string | null;
  } | null;
};

export async function getMainBanner(section: string): Promise<MainBannerData> {
  const fallbackImage = heroImagesBySection[section] ?? '';

  try {
    const response = await apiFetch<MainBannerApiResponse>(`/main-banners/${section}`, {
      cache: 'no-store',
    });

    if (!response.data || !response.data.image) {
      return {
        section,
        image: fallbackImage,
        imageAlt: '',
      };
    }

    return {
      section,
      image: response.data.image,
      imageAlt: response.data.imageAlt ?? '',
    };
  } catch (error) {
    console.error('[getMainBanner] API error', error);

    return {
      section,
      image: fallbackImage,
      imageAlt: '',
    };
  }
}
