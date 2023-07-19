import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '..';

/**
 * The useLatestValue hook allows you to get the latest value of a variable.
 * @reference https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/hooks/use-latest-value.ts
 */
export function useLatestValue<T>(value: T) {
  const cache = useRef(value);

  useIsomorphicLayoutEffect(() => {
    cache.current = value;
  }, [value]);

  return cache;
}
