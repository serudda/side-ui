import React, { ReactNode } from 'react';
import cn from 'classnames';

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
   * Callback when the option was clicked
   */
  onClick: (event: React.MouseEvent) => void;
}

/**
 * Represents an item to use in the DropdownMenu component
 */
export const Option = ({ className, children, onClick }: OptionProps) => {
  const classes = cn(
    className,
    'flex',
    'p-2',
    'hover:bg-slate-950 cursor-pointer min-w-[200px] rounded',
  );

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) onClick(event);
  };

  /* Render JSX */
  return (
    <div role="option" tabIndex={0} className={classes} onClick={handleClick}>
      {children}
    </div>
  );
};
