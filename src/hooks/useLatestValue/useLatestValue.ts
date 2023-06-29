import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

export function useLatestValue<T>(value: T) {
  const cache = useRef(value);

  useIsomorphicLayoutEffect(() => {
    cache.current = value;
  }, [value]);

  return cache;
}
