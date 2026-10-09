export function paginate<T>(items: T[], requestedPage: number, size: number) {
  const pageSize = Number.isFinite(size) ? Math.max(1, Math.floor(size)) : 12;
  const pages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Number.isFinite(requestedPage)
    ? Math.min(pages, Math.max(1, Math.floor(requestedPage)))
    : 1;
  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, items.length);
  return { page, pages, start, end, items: items.slice(start, end) };
}
