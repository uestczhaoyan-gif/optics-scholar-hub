import test from 'node:test';
import assert from 'node:assert/strict';
import { correctionLink } from '../lib/correction-link.ts';
test('correction links preserve record identity and source without submitting an issue', () => {
  const source = 'https://example.org/guide?a=1&b=2';
  const url = new URL(
    correctionLink('https://github.com/owner/repo/', {
      id: 'test-2027',
      name: '中文 & Optics',
      year: 2027,
      source,
      issn: '0028-0836',
    }),
  );
  assert.equal(url.pathname, '/owner/repo/issues/new');
  assert.equal(url.searchParams.get('template'), 'data.yml');
  assert.match(url.searchParams.get('entity'), /ID: test-2027/);
  assert.match(url.searchParams.get('entity'), /ISSN: 0028-0836/);
  assert.equal(url.searchParams.get('title'), '[数据纠错] 中文 & Optics 2027');
  assert(url.searchParams.get('evidence').includes(source));
  assert(!url.searchParams.has('query'));
});
