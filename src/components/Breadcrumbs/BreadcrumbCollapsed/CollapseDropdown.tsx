import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { cn } from '@common';
import { DropdownMenu, PopoverPlacement } from '@components';

interface CollapseDropdownProps {
  /**
   * Array of breadcrumb items that are currently collapsed.
   * These items are rendered within the dropdown menu.
   */
  collapsedItems: Array<ReactNode>;

  /**
   * Boolean state indicating whether the collapsed items
   * are currently visible in the dropdown menu.
   */
  collapseItemsVisible: boolean;

  /**
   * Indicates whether the collapsed items are currently visible.
   */
  isActive?: boolean;

  /**
   * Function to toggle the visibility of collapsed items,
   * controlling the open state of the dropdown menu.
   */
  handleCollapseItemsToggle: () => void;
}

export const CollapseDropdown = ({
  collapsedItems,
  collapseItemsVisible,
  isActive,
  handleCollapseItemsToggle,
}: CollapseDropdownProps) => {
  const classes = {
    listItem: cn(
      'text-gray-400 hover:text-gray-700',
      'flex items-center gap-2',
      'cursor-pointer transition-colors relative',

      // Accessibility Option
      'focus-within:outline-blue-700 focus-within:outline-2 focus-within:outline',
    ),
  };
  const handleCollapseKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCollapseItemsToggle();
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu
      isOpen={collapseItemsVisible}
      menuPlacement={PopoverPlacement.bottom}
      trigger={
        <li className={classes.listItem}>
          <button
            onClick={handleCollapseItemsToggle}
            onKeyDown={handleCollapseKeyPress}
            onMouseDown={handleMouseDown}
            tabIndex={0}
            aria-haspopup="true"
            aria-controls="breadcrumbCollapse"
            aria-expanded={isActive ? 'true' : 'false'}
          >
            ...
          </button>
        </li>
      }
      menu={
        <DropdownMenu.Menu>
          {collapsedItems.map((item, index) => (
            <DropdownMenu.Option className="group/dropdown" key={index} isFocusable={false}>
              {item}
            </DropdownMenu.Option>
          ))}
        </DropdownMenu.Menu>
      }
    />
  );
};
