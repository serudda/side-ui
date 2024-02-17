import { Fragment, ReactNode } from 'react';
import { cn } from '@common';

interface CollapsedSpreadProps {
  /**
   * Array of breadcrumb items that are currently collapsed.
   */
  collapsedItems: Array<ReactNode>;

  /**
   * Indicates whether the collapsed items are currently visible.
   */
  isActive?: boolean;

  /**
   * Function to toggle the visibility of collapsed items.
   */
  handleCollapseItemsToggle: () => void;
}

export const CollapsedSpread = ({
  collapsedItems,
  isActive,
  handleCollapseItemsToggle,
}: CollapsedSpreadProps) => {
  const classes = {
    container: cn('relative flex items-center gap-2 overflow-hidden'),
    expandTriggerContainer: cn('flex gap-2', {
      hidden: isActive,
    }),
    expandTrigger: cn(
      'text-slate-400  hover:text-slate-400',
      'dark:text-slate-400 dark:hover:text-slate-600',
      'cursor-pointer transition-colors',
    ),
    collapsedContainer: cn('flex items-center gap-2', '-translate-x-full transition-all', {
      'absolute left-0 last:left-20 whitespace-nowrap opacity-0 invisible': !isActive,
      'opacity-100 translate-x-0': isActive,
    }),
  };
  const renderCollapsibleItems = () =>
    collapsedItems.map((item, index) => (
      <Fragment key={index}>
        <div className={classes.collapsedContainer}>{item}</div>
      </Fragment>
    ));

  return (
    <li className={classes.container}>
      <div className={classes.expandTriggerContainer}>
        <button className={classes.expandTrigger} onMouseEnter={handleCollapseItemsToggle}>
          ...
        </button>
      </div>

      {renderCollapsibleItems()}
    </li>
  );
};
