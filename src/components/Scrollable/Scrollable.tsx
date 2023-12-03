import React, { HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

export enum ScrollableDirection {
  Horizontal,
  Vertical,
  Both,
}

export interface ScrollableProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * Component children to display as the main content
   */
  children: React.ReactNode;

  /**
   * Specify an optional direction the scroll should apply, default: `ScrollableDirection.Both`
   */
  direction?: ScrollableDirection;
}

/**
 * `Scrollable` shows an horizontal/vertical scrollbar if the content
 * goes beyond its boundaries.
 */
export const Scrollable = forwardRef<HTMLDivElement, ScrollableProps>(
  ({ className, children, direction = ScrollableDirection.Both, ...props }, forwardedRef) => {
    const classes = {
      container: cn(
        className,
        ' scrollbar-thumb-neutral-400 scrollbar-track-neutral-700 scrollbar-thumb-rounded-lg',
        {
          'horizontal-scroll overflow-y-hidden overflow-x-auto':
            direction === ScrollableDirection.Horizontal,
          'scrollbar-w-2 overflow-y-auto overflow-x-hidden':
            direction === ScrollableDirection.Vertical,
          'scrollbar-w-2 horizontal-scroll overflow-auto': direction === ScrollableDirection.Both,
        },
      ),
    };
    return (
      <div ref={forwardedRef} className={classes.container} {...props}>
        {children}
      </div>
    );
  },
);
