'use client';
import { useEffect, useState } from 'react';
import { favoritesKey, parseFavorites } from '@/lib/favorites';

export function useFavorites(knownIds: readonly string[]) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setIds(parseFavorites(localStorage.getItem(favoritesKey), knownIds));
      } catch {
        setStorageFailed(true);
      }
      setReady(true);
    }, 0);
    return () => clearTimeout(timer);
  }, [knownIds]);
  function toggle(id: string) {
    if (!ready || !knownIds.includes(id)) return;
    const next = ids.includes(id)
      ? ids.filter((value) => value !== id)
      : [...ids, id];
    setIds(next);
    try {
      localStorage.setItem(favoritesKey, JSON.stringify(next));
    } catch {
      setStorageFailed(true);
    }
  }
  return { ids, ready, storageFailed, toggle };
}

export function FavoriteButton({
  name,
  active,
  disabled,
  onToggle,
}: {
  name: string;
  active: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className="favorite-button"
      aria-pressed={active}
      aria-label={`${active ? '取消关注' : '关注'} ${name}`}
      disabled={disabled}
      onClick={onToggle}
    >
      {active ? '★ 已关注' : '☆ 关注'}
    </button>
  );
}
