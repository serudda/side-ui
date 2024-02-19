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
    container: cn(
      'relative flex items-center gap-2 overflow-hidden',
      'focus-within:outline-blue-700 focus-within:outline-2 focus-within:outline-double',
      {
        hidden: isActive,
      },
    ),
    expandTrigger: cn(
      'text-slate-400 hover:text-slate-400',
      'dark:text-slate-400 dark:hover:text-slate-600',
      'cursor-pointer transition-colors',
    ),
    collapsedContainer: cn('flex items-center gap-2', '-translate-x-full transition-all', {
      'absolute left-0 last:left-20 whitespace-nowrap opacity-0 invisible': !isActive,
      'opacity-100 translate-x-0': isActive,
    }),
    itemsContainer: cn('flex items-center gap-2', {
      'absolute inset-0 -z-10 invisible': !isActive,
    }),
  };

  const handleCollapseKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCollapseItemsToggle();
    }
  };

  const renderCollapsibleItems = () => (
    <div id="breadcrumbCollapse" className={classes.itemsContainer}>
      {collapsedItems.map((item, index) => (
        <Fragment key={index}>
          <li className={classes.collapsedContainer}>{item}</li>
        </Fragment>
      ))}
    </div>
  );

  return (
    <>
      <li className={classes.container}>
        <button
          className={classes.expandTrigger}
          onMouseEnter={handleCollapseItemsToggle}
          tabIndex={0}
          onKeyDown={(event) => handleCollapseKeyPress(event)}
          aria-haspopup="true"
          aria-controls="breadcrumbCollapse"
          aria-expanded={isActive ? 'true' : 'false'}
        >
          ...
        </button>
      </li>

      {renderCollapsibleItems()}
    </>
  );
};
