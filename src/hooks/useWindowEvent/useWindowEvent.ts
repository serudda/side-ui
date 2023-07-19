import { useEffect } from 'react';
import { useLatestValue } from '..';

/**
 * The useWindowEvent hook allows you to add an event listener to the window.
 * @reference https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/hooks/use-window-event.ts
 */
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
