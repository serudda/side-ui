import { RefObject } from 'react';
import { useEventListener } from '~/hooks';

type Handler = (event: MouseEvent) => void;

/**
 * This hook makes it easy to detect when a user clicks outside of a specific element.
 * @reference https://usehooks-ts.com/react-hook/use-on-click-outside
 */

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  console.log('ref: ', ref);
  console.log('useEventListener: ', useEventListener);
  useEventListener(mouseEvent, (event) => {
    console.log('event: ', event);
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) return;

    handler(event);
  });
}