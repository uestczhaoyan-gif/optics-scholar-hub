import test from 'node:test';
import assert from 'node:assert/strict';
import { paginate } from '../lib/pagination.ts';

test('pagination covers every journal exactly once and bounds the last page', () => {
  const items = Array.from({ length: 114 }, (_, i) => i);
  const pages = Array.from({ length: 10 }, (_, i) =>
    paginate(items, i + 1, 12),
  );
  assert.deepEqual(
    pages.flatMap((page) => page.items),
    items,
  );
  assert.equal(pages[9].items.length, 6);
  assert.equal(pages[9].end, 114);
  assert.equal(paginate(items, 100, 12).page, 10);
  assert.equal(paginate(items, -1, 12).page, 1);
});

test('filtering to fewer or zero results cannot leave an empty out-of-range page', () => {
  assert.deepEqual(paginate([1, 2], 8, 12).items, [1, 2]);
  assert.deepEqual(paginate([], 8, 12), {
    page: 1,
    pages: 1,
    start: 0,
    end: 0,
    items: [],
  });
});
