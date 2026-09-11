import type { Conference } from './catalog';

const stamp = (date: Date) =>
  date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '');
const day = (value: string) => value.replace(/-/g, '');
const nextDay = (value: string) => {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return day(date.toISOString().slice(0, 10));
};
const escapeText = (value: string) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/\r\n|\r|\n/g, '\\n')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,');

// RFC 5545 folds at 75 octets, without splitting a UTF-8 character.
function fold(line: string): string {
  const encoder = new TextEncoder();
  let result = '',
    bytes = 0;
  for (const character of line) {
    const size = encoder.encode(character).length;
    if (bytes + size > 75) {
      result += '\r\n ';
      bytes = 1;
    }
    result += character;
    bytes += size;
  }
  return result;
}

export function conferenceCalendar(
  conferences: Conference[],
  generatedAt = new Date(),
): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Optics Scholar Hub//Calendar//ZH',
    'CALSCALE:GREGORIAN',
  ];
  const event = (
    id: string,
    summary: string,
    dates: string[],
    description: string,
    url: string,
    location?: string,
  ) => {
    lines.push(
      'BEGIN:VEVENT',
      `UID:${id}@optics-scholar-hub`,
      `DTSTAMP:${stamp(generatedAt)}`,
      ...dates,
      `SUMMARY:${escapeText(summary)}`,
      `DESCRIPTION:${escapeText(description)}`,
      `URL:${url}`,
      'TRANSP:TRANSPARENT',
    );
    if (location) lines.push(`LOCATION:${escapeText(location)}`);
    lines.push('END:VEVENT');
  };
  for (const c of conferences) {
    const context = `核验日期：${c.checkedAt}\n${c.notes}\n此文件为导出快照，包含已过期日期，不自动更新。请以本届官方通知为准。`;
    event(
      `${c.id}-meeting`,
      `${c.series} ${c.year} · 会议`,
      [
        `DTSTART;VALUE=DATE:${day(c.start)}`,
        `DTEND;VALUE=DATE:${nextDay(c.end)}`,
      ],
      context,
      c.website,
      `${c.location} · ${c.venue}`,
    );
    const duplicates = new Map<string, number>();
    for (const d of c.deadlines) {
      if (!d.at && !d.date) continue;
      const key = `${d.type}-${encodeURIComponent(d.label)}`;
      const occurrence = (duplicates.get(key) ?? 0) + 1;
      duplicates.set(key, occurrence);
      const dates = d.at
        ? [`DTSTART:${stamp(new Date(d.at))}`]
        : [
            `DTSTART;VALUE=DATE:${day(d.date!)}`,
            `DTEND;VALUE=DATE:${nextDay(d.date!)}`,
          ];
      const precision = d.at
        ? `官方时间：${d.at}（${d.timezone}）`
        : '仅公布日期，全天事件不表示可在当天任意时刻提交。';
      event(
        `${c.id}-${key}-${occurrence}`,
        `${c.series} ${c.year} · ${d.label}`,
        dates,
        `${precision}\n${d.note ?? ''}\n${context}`,
        d.source,
      );
    }
  }
  lines.push('END:VCALENDAR');
  return lines.map(fold).join('\r\n') + '\r\n';
}
