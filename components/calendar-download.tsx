'use client';
import type { Conference } from '@/lib/catalog';
import { conferenceCalendar } from '@/lib/calendar';

export function CalendarDownload({
  conferences,
  label,
}: {
  conferences: Conference[];
  label: string;
}) {
  function download() {
    const url = URL.createObjectURL(
      new Blob([conferenceCalendar(conferences)], {
        type: 'text/calendar;charset=utf-8',
      }),
    );
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download =
      conferences.length === 1
        ? `${conferences[0].id}.ics`
        : 'optics-conferences.ics';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <button
      className="calendar-download"
      disabled={!conferences.length}
      onClick={download}
    >
      {label}
    </button>
  );
}
