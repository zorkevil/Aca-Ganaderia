export function normalizeHeroTitle(html: string): string {
  return html.replace(/<strong>/g, '<span class="text-color-4">').replace(/<\/strong>/g, '</span>');
}
