import React, { ReactNode } from 'react';
import { cn } from '@common';

export interface OptionProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Elements to display inside the Option.
   */
  children?: ReactNode;

  /**
   * Specify if the option is disabled
   */
  isDisabled?: boolean;

  /**
   * Callback when the option was clicked
   */
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * Represents an item to use in the DropdownMenu component
 */
export const Option = ({ className, children, isDisabled = false, onClick }: OptionProps) => {
  const classes = cn(
    'flex select-none',
    'p-2',
    'rounded',
    {
      'cursor-default': isDisabled,
      'cursor-pointer hover:bg-slate-950': !isDisabled,
    },
    className,
  );

  const handleClick = (event: React.MouseEvent) => {
    if (isDisabled) return;
    if (onClick) onClick(event);
  };

  /* Render JSX */
  return (
    <div role="option" tabIndex={0} className={classes} onClick={handleClick}>
      {children}
    </div>
  );
};
