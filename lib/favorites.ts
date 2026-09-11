export const favoritesKey = 'optics-scholar-hub:favorites:v1';
export function parseFavorites(
  raw: string | null,
  knownIds: readonly string[],
): string[] {
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    const known = new Set(knownIds);
    return [
      ...new Set(
        value.filter(
          (id): id is string => typeof id === 'string' && known.has(id),
        ),
      ),
    ];
  } catch {
    return [];
  }
}
