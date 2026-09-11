export async function catalogDigest(payload: unknown): Promise<string> {
  const hash = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(JSON.stringify(payload)),
  );
  return Array.from(new Uint8Array(hash), (b) =>
    b.toString(16).padStart(2, '0'),
  ).join('');
}

export async function checkCatalogUpdate(
  base: string,
  payload: unknown,
  fetcher: typeof fetch = fetch,
) {
  const url = new URL('catalog-version.json', base);
  url.searchParams.set('check', String(Date.now()));
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetcher(url, {
      cache: 'no-store',
      signal: controller.signal,
    });
    if (!response.ok) throw new Error('Cannot check published data');
    const raw: unknown = await response.json();
    if (!raw || typeof raw !== 'object')
      throw new Error('Invalid version manifest');
    const value = raw as Record<string, unknown>;
    if (
      value.schema !== 1 ||
      typeof value.version !== 'string' ||
      !/^[a-f0-9]{64}$/.test(value.version) ||
      typeof value.publishedAt !== 'string' ||
      !Number.isFinite(Date.parse(value.publishedAt))
    )
      throw new Error('Invalid version manifest');
    return {
      version: value.version as string,
      publishedAt: value.publishedAt as string,
      changed: value.version !== (await catalogDigest(payload)),
    };
  } finally {
    clearTimeout(timer);
  }
}
