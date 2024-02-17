import { Children, ReactNode, useState } from 'react';
import { cn } from '@common';
import { CollapseDropdown, CollapsedSpread } from '@components';
import { ItemIdentifier, processBreadcrumbItem } from './utils/helper';

export enum CollapseMode {
  dropdown = 'dropdown',
  spread = 'spread',
}

export enum BreadcrumbSpacing {
  tight = 'tight',
  snug = 'snug',
  normal = 'normal',
  relaxed = 'relaxed',
  loose = 'loose',
}

export const BreadcrumbSpacings: Record<BreadcrumbSpacing, string> = {
  [BreadcrumbSpacing.tight]: 'gap-1',
  [BreadcrumbSpacing.snug]: 'gap-2',
  [BreadcrumbSpacing.normal]: 'gap-3',
  [BreadcrumbSpacing.relaxed]: 'gap-4',
  [BreadcrumbSpacing.loose]: 'gap-5',
};

interface BreadcrumbProps {
  /**
   * An array of ReactNode elements representing the breadcrumb items.
   */
  children: Array<ReactNode>;

  /**
   * Optional CSS class for additional styling.
   */
  className?: string;

  /**
   * Determines whether the collapse button is implement
   */
  isCollapse?: boolean;

  /**
   * The number of items to display after the collapsed items.
   */
  itemsAfterCollapse?: number;

  /**
   * The number of items to display before the collapsed items.
   */
  itemsBeforeCollapse?: number;

  /**
   * Mode for collapsing breadcrumb items, can be either 'dropdown' or 'spread'.
   */
  collapseMode?: CollapseMode;

  /**
   * Custom separator between breadcrumb items.
   */
  separator?: string | ReactNode;

  /**
   * Defines the spacing between breadcrumb items.
   */
  spacing?: BreadcrumbSpacing;
}

/**
 * Breadcrumbs provide a navigation trail for users to follow back to the starting or entry point of a website or application.
 * They offer a hierarchical structure of the current page in relation to the website's structure and help users understand their current location.
 */
export const Breadcrumb = ({
  children,
  className,
  collapseMode = CollapseMode.spread,
  isCollapse = false,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  separator = '/',
  spacing = BreadcrumbSpacing.normal,
}: BreadcrumbProps) => {
  const childrenArray = Children.toArray(children);
  const childrenBeforeCollapse = childrenArray.slice(
    0,
    childrenArray.length > 0
      ? Math.min(
          Math.max(1, itemsBeforeCollapse),
          Math.max(0, childrenArray.length - itemsAfterCollapse),
        )
      : 0,
  );
  const childrenAfterCollapse =
    itemsAfterCollapse >= childrenArray.length
      ? childrenArray.slice(1)
      : itemsAfterCollapse <= 0
      ? childrenArray.slice(-1)
      : childrenArray.slice(-Math.max(1, itemsAfterCollapse));
  const collapsedChildren = childrenArray.slice(
    childrenBeforeCollapse.length,
    -childrenAfterCollapse.length,
  );

  const firstItem = childrenArray[0];
  const lastItem = childrenArray[childrenArray.length - 1];
  const [collapseItemsVisible, setCollapseItemsVisible] = useState(false);

  const classes = {
    container: cn(
      'flex items-center',
      'px-4 py-2 w-fit overflow-scroll',
      'rounded-xl',
      BreadcrumbSpacings[spacing],
      className,
    ),
    list: cn('flex items-center', [BreadcrumbSpacings[spacing]]),
  };

  const startItems = childrenBeforeCollapse.map((item) =>
    processBreadcrumbItem({
      item,
      isFirst: item === firstItem,
      isLast: item === lastItem,
      separator,
    }),
  );

  const collapseItems = collapsedChildren.map((item) =>
    processBreadcrumbItem({
      collapse: collapseMode === CollapseMode.dropdown,
      item,
      separator,
    }),
  );

  const endItems = childrenAfterCollapse.map((item) =>
    processBreadcrumbItem({
      collapseMode,
      collapseItemsVisible,
      identifier: ItemIdentifier.after,
      item,
      isFirst: item === childrenAfterCollapse[0],
      isLast: item === lastItem,
      separator,
    }),
  );

  const allItems = childrenArray.map((item) =>
    processBreadcrumbItem({
      item,
      isFirst: item === firstItem,
      isLast: item === lastItem,
      separator,
    }),
  );

  const handleCollapseItemsToggle = () => setCollapseItemsVisible(!collapseItemsVisible);

  const renderCollapsedItems = (item: Array<ReactNode>) => {
    if (collapseMode === CollapseMode.dropdown) {
      return (
        <CollapseDropdown
          collapsedItems={item}
          collapseItemsVisible={collapseItemsVisible}
          handleCollapseItemsToggle={handleCollapseItemsToggle}
        />
      );
    } else {
      return (
        <CollapsedSpread
          collapsedItems={item}
          handleCollapseItemsToggle={handleCollapseItemsToggle}
          isActive={collapseItemsVisible}
        />
      );
    }
  };

  const renderBreadcrumbs = () => {
    const effectiveItemsBeforeCollapse = Math.max(1, itemsBeforeCollapse);
    const effectiveItemsAfterCollapse = Math.max(1, itemsAfterCollapse);

    if (
      !isCollapse ||
      allItems.length <= effectiveItemsBeforeCollapse + effectiveItemsAfterCollapse
    ) {
      return <ol className={classes.list}>{allItems}</ol>;
    }

    return (
      <ol className={classes.list}>
        {/* Items before the collapse */}
        {startItems}

        {/* Collapsible items */}
        {renderCollapsedItems(collapseItems)}

        {/* Items after the collapse */}
        {endItems}
      </ol>
    );
  };

  return (
    <nav className={classes.container} onMouseLeave={() => setCollapseItemsVisible(false)}>
      {renderBreadcrumbs()}
    </nav>
  );
};
