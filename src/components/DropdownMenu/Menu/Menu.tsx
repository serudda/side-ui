import { ReactNode } from 'react';
import cn from 'classnames';

export interface MenuProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * Elements to display inside the DropdownMenu.
   */
  children?: ReactNode;
}

/**
 * Menu (Dropdown Menu)
 */
export const Menu = ({ className, children }: MenuProps) => {
  const classes = cn(className, 'flex-grow w-full overflow-y-auto p-1.5');

  return (
    <div className={classes} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      {children}
    </div>
  );
};
