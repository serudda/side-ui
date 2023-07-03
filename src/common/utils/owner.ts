import { MutableRefObject } from 'react';

/**
 * The getOwnerDocument function allows you to get the owner document of an element.
 * @reference https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/utils/owner.ts
 */
export function getOwnerDocument<T extends Element | MutableRefObject<Element | null>>(
  element: T | null | undefined,
) {
  if (typeof window !== 'undefined') return null;
  if (element instanceof Node) return element.ownerDocument;
  if (element?.hasOwnProperty('current')) {
    if (element.current instanceof Node) return element.current.ownerDocument;
  }

  return document;
}
