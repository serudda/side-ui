import { useEffect } from 'react';
import { useLatestValue } from '../useLatestValue/useLatestValue';

export function useWindowEvent<TType extends keyof WindowEventMap>(
  type: TType,
  listener: (ev: WindowEventMap[TType]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  const listenerRef = useLatestValue(listener);

  useEffect(() => {
    function handler(event: WindowEventMap[TType]) {
      listenerRef.current(event);
    }

    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
  }, [type, options]);
}
