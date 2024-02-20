import { Fragment, ReactNode } from 'react';
import { cn } from '@common';
import { BreadcrumbSpacing, BreadcrumbSpacings } from '@components';

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
   * Defines the spacing between breadcrumb items.
   */
  spacing?: BreadcrumbSpacing;

  /**
   * Function to toggle the visibility of collapsed items.
   */
  handleCollapseItemsToggle: () => void;
}

export const CollapsedSpread = ({
  collapsedItems,
  isActive,
  spacing = BreadcrumbSpacing.normal,
  handleCollapseItemsToggle,
}: CollapsedSpreadProps) => {
  const classes = {
    container: cn(
      'relative flex items-center gap-2 overflow-hidden',
      'focus-within:outline-blue-700 focus-within:outline-2 focus-within:outline',
      {
        hidden: isActive,
      },
    ),
    collapsedContainer: cn(
      'flex items-center',
      '-translate-x-full transition-all',
      {
        'absolute inset-y-0 left-0 -z-10 last:left-20 whitespace-nowrap opacity-0 invisible select-none':
          !isActive,
        'opacity-100 translate-x-0': isActive,
      },
      [BreadcrumbSpacings[spacing]],
    ),
    trigger: cn(
      'text-slate-400 hover:text-slate-400',
      'dark:text-slate-400 dark:hover:text-slate-600',
      'cursor-pointer transition-colors',
    ),
  };

  const handleCollapseKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCollapseItemsToggle();
    }
  };

  const renderCollapsibleItems = () => (
    <div id="breadcrumbCollapse" className={classes.collapsedContainer}>
      {collapsedItems.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  );

  return (
    <>
      <li className={classes.container}>
        <button
          className={classes.trigger}
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
