import { ReactNode, forwardRef } from 'react';
import { cn } from '@common';

export interface TriggerProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * Elements to display inside the DropdownMenu.
   */
  children?: ReactNode;

  /**
   * Callback fired when the component is hovered over.
   */
  onMouseOver?: () => void;

  /**
   * Callback fired when the component is hovered out.
   */
  onMouseOut?: () => void;
}

/**
 * Trigger (Tooltip)
 */
export const Trigger = forwardRef<HTMLDivElement, TriggerProps>(
  ({ className, children, onMouseOver, onMouseOut }, ref) => {
    const classes = cn(className);

    return (
      <span ref={ref} className={classes} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {children}
      </span>
    );
  },
);
