import { useLayoutEffect, useState } from 'react';
import { Breakpoint, getDeviceSize } from '@common';
import { useWindowSize } from '@hooks';

interface useBreakpointResponse {
  breakpoint: Breakpoint;
  isMobile: boolean;
}

export const useBreakpoint = (): useBreakpointResponse => {
  const { windowWidth } = useWindowSize();
  const [breakpoint, setBreakpoint] = useState(() => getDeviceSize(windowWidth));

  useLayoutEffect(() => setBreakpoint(getDeviceSize(windowWidth)), [windowWidth]);

  const isMobile = breakpoint === Breakpoint.xs || breakpoint === Breakpoint.sm;

  return { breakpoint, isMobile };
};
