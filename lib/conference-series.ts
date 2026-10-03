import type { Conference } from './catalog';

export type ConferenceSeries = {
  id: string;
  name: string;
  aliases: string[];
  editionIds: string[];
  website: string;
  sources: string[];
  nextEditionCheckedAt: string | null;
};

export const seriesFavoritesKey = 'optics-scholar-hub:series-favorites:v1';

export function seriesEditions(
  series: ConferenceSeries,
  conferences: Conference[],
) {
  const ids = new Set(series.editionIds);
  return conferences
    .filter((c) => ids.has(c.id))
    .sort((a, b) => b.start.localeCompare(a.start) || b.id.localeCompare(a.id));
}

export function seriesOutlook(
  series: ConferenceSeries,
  conferences: Conference[],
  now: Date,
) {
  const editions = seriesEditions(series, conferences);
  const today = now.toISOString().slice(0, 10);
  const upcoming = [...editions].reverse().find((c) => c.end >= today);
  return {
    editions,
    upcoming,
    message: upcoming
      ? `已收录 ${upcoming.year} 届 · ${upcoming.start} — ${upcoming.end}`
      : '暂无已核实的后续届次，持续跟进官方公告',
  };
}
