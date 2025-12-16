const API_URL = process.env.LARAVEL_API_URL!;
const API_TOKEN = process.env.LARAVEL_API_TOKEN!;

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
      ...options.headers,
    },
    // importante para SSR
    cache: 'no-store', // o 'force-cache' si querés cachear
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
}
