import { useEffect, useLayoutEffect } from 'react';

/**
 * This hook makes it easy to use either useEffect or useLayoutEffect depending on whether the code is running on the server or in the browser.
 * @reference https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
 */

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
