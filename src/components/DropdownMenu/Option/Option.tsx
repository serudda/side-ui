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
   * Whether the option can be focused or not.
   */
  isFocusable?: boolean;

  /**
   * Callback when the option was clicked
   */
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * Represents an item to use in the DropdownMenu component
 */
export const Option = (
  { className, children, isDisabled = false, onClick }: OptionProps,
  isFocusable = true,
) => {
  const classes = cn(
    'flex select-none',
    'p-2',
    'rounded',
    {
      'cursor-default': isDisabled,
      'cursor-pointer hover:dark:bg-slate-950 hover:bg-slate-200': !isDisabled,
    },
    className,
  );

  const handleClick = (event: React.MouseEvent) => {
    if (isDisabled) return;
    if (onClick) onClick(event);
  };

  const handleFocus = (isFocusable: boolean) => (isFocusable ? -1 : 0);

  /* Render JSX */
  return (
    <div
      role="option"
      tabIndex={handleFocus(isFocusable)}
      className={classes}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
