export const mockShorts = [
  'https://www.youtube.com/shorts/7enUjgwGXbY',
  'https://www.youtube.com/shorts/7enUjgwGXbY',
  'https://www.youtube.com/shorts/7enUjgwGXbY',
  'https://www.youtube.com/shorts/7enUjgwGXbY',
];

export function getShortId(url: string): string {
  try {
    const u = new URL(url);

    // /shorts/VIDEOID
    if (u.pathname.startsWith('/shorts/')) {
      return u.pathname.replace('/shorts/', '').split('?')[0];
    }

    // fallback por si llega otro formato
    return url;
  } catch {
    return url;
  }
}
/*
// lib/youtube.ts
export type ShortVideo = {
  id: string;
  title: string;
  thumbnail: string;
};

const YT_API = 'https://www.googleapis.com/youtube/v3';

export async function getYouTubeShorts(channelId: string): Promise<ShortVideo[]> {
  const apiKey = process.env.YT_API_KEY;
  if (!apiKey) throw new Error('Falta la variable de entorno YT_API_KEY');

  // Paso 1: obtener los últimos videos del canal
  const searchRes = await fetch(
    `${YT_API}/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`,
  );

  const searchData = await searchRes.json();

  const videoIds = searchData.items
    .filter((item: any) => item.id.kind === 'youtube#video')
    .map((v: any) => v.id.videoId);

  if (videoIds.length === 0) return [];

  // Paso 2: obtener detalles de los videos (duración)
  const detailsRes = await fetch(
    `${YT_API}/videos?key=${apiKey}&id=${videoIds.join(',')}&part=contentDetails,snippet`,
  );

  const detailsData = await detailsRes.json();

  // Paso 3: filtrar únicamente Shorts (< 60s)
  const shorts = detailsData.items
    .filter((item: any) => {
      const duration = item.contentDetails.duration; // ejemplo: "PT45S"
      const seconds = parseYTDuration(duration);
      return seconds <= 60;
    })
    .map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
    }));

  return shorts;
}

// Helper para parsear duración ISO 8601
function parseYTDuration(duration: string) {
  const match = duration.match(/PT(\d+M)?(\d+S)?/);
  const minutes = parseInt(match?.[1] || '0') || 0;
  const seconds = parseInt(match?.[2] || '0') || 0;
  return minutes * 60 + seconds;
}
*/
