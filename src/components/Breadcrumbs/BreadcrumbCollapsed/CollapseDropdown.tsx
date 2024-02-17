import { ReactNode } from 'react';
import { cn } from '@common';
import { DropdownMenu, PopoverPlacement } from '@components';

interface CollapseDropdownProps {
  /**
   * Array of breadcrumb items that are currently collapsed. These items are rendered within the dropdown menu.
   */
  collapsedItems: Array<ReactNode>;

  /**
   * Boolean state indicating whether the collapsed items are currently visible in the dropdown menu.
   */
  collapseItemsVisible: boolean;

  /**
   * Function to toggle the visibility of collapsed items, controlling the open state of the dropdown menu.
   */
  handleCollapseItemsToggle: () => void;
}

export const CollapseDropdown = ({
  collapsedItems,
  collapseItemsVisible,
  handleCollapseItemsToggle,
}: CollapseDropdownProps) => {
  const classes = {
    listItem: cn('text-gray-400 hover:text-gray-700', 'cursor-pointer transition-colors'),
  };

  return (
    <DropdownMenu
      isOpen={collapseItemsVisible}
      menuPlacement={PopoverPlacement.bottom}
      trigger={
        <li className={classes.listItem}>
          <button onClick={handleCollapseItemsToggle}>...</button>
        </li>
      }
      menu={
        <DropdownMenu.Menu>
          {collapsedItems.map((item, index) => (
            <DropdownMenu.Option className="group/dropdown" key={index}>
              {item}
            </DropdownMenu.Option>
          ))}
        </DropdownMenu.Menu>
      }
    />
  );
};
