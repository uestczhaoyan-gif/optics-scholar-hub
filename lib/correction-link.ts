export function correctionLink(
  repository: string,
  record: {
    id: string;
    name: string;
    source: string;
    issn?: string | null;
    year?: number;
  },
): string {
  const url = new URL(repository.replace(/\/$/, '') + '/issues/new');
  url.searchParams.set('template', 'data.yml');
  url.searchParams.set(
    'title',
    `[数据纠错] ${record.name}${record.year ? ` ${record.year}` : ''}`,
  );
  url.searchParams.set(
    'entity',
    `${record.name}${record.year ? ` · ${record.year}` : ''} · ID: ${record.id}${record.issn ? ` · ISSN: ${record.issn}` : ''}`,
  );
  url.searchParams.set(
    'evidence',
    `本站记录的官方入口：${record.source}\n请补充你核对的官方来源、阅读日期和修改依据。`,
  );
  return url.href;
}
