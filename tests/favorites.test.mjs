import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFavorites } from '../lib/favorites.ts';
test('favorites recover from corrupt storage and ignore stale, duplicate or non-string IDs', () => {
  for (const raw of [null, '{', 'null', '{}', '123'])
    assert.deepEqual(parseFavorites(raw, ['a']), []);
  assert.deepEqual(parseFavorites('["a","a","old",4,{},"b"]', ['a', 'b']), [
    'a',
    'b',
  ]);
  const ids = ['a', 'b'];
  assert.deepEqual(parseFavorites(JSON.stringify(ids), ids), ids);
});
