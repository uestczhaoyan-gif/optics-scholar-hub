import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { catalogDigest, checkCatalogUpdate } from '../lib/catalog-update.ts';

test('update check uses deployed subpath and compares data with the build digest', async () => {
  const payload = {
    journals: [{ name: '光学' }],
    conferences: [],
    events: [],
    topics: [],
    site: {},
  };
  const version = createHash('sha256')
    .update(JSON.stringify(payload))
    .digest('hex');
  assert.equal(await catalogDigest(payload), version);
  const mock = async (url, options) => {
    assert.equal(url.pathname, '/optics-scholar-hub/catalog-version.json');
    assert.equal(options.cache, 'no-store');
    assert.ok(url.searchParams.has('check'));
    return new Response(
      JSON.stringify({
        schema: 1,
        version,
        publishedAt: '2026-09-11T00:00:00Z',
      }),
    );
  };
  assert.equal(
    (
      await checkCatalogUpdate(
        'https://example.org/optics-scholar-hub/?query=x#journals',
        payload,
        mock,
      )
    ).changed,
    false,
  );
  assert.equal(
    (
      await checkCatalogUpdate(
        'https://example.org/optics-scholar-hub/index.html',
        { ...payload, events: ['new'] },
        mock,
      )
    ).changed,
    true,
  );
});

test('failed and malformed update checks reject without producing a new version', async () => {
  for (const response of [
    new Response('', { status: 503 }),
    new Response('<html>'),
    new Response(JSON.stringify({ schema: 2, version: 'fake' })),
  ]) {
    await assert.rejects(
      checkCatalogUpdate('https://example.org/', {}, async () => response),
    );
  }
  await assert.rejects(
    checkCatalogUpdate('https://example.org/', {}, async () => {
      throw Error('offline');
    }),
  );
});
