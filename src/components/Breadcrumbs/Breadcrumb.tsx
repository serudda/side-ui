import { Children, ReactNode, useState } from 'react';
import { cn } from '@common';
import { CollapseDropdown, CollapsedSpread } from '@components';
import { useBreadcrumb } from '@hooks';
import {
  calculateChildrenAfterCollapse,
  calculateChildrenBeforeCollapse,
  calculateCollapsedChildren,
} from './utils/helper';

export enum CollapseMode {
  dropdown = 'dropdown',
  spread = 'spread',
}

export enum BreadcrumbItemIdentifier {
  before = 'before',
  collapse = 'collapse',
  after = 'after',
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
  const childrenBeforeCollapse = calculateChildrenBeforeCollapse(
    itemsBeforeCollapse,
    itemsAfterCollapse,
    childrenArray,
  );
  const childrenAfterCollapse = calculateChildrenAfterCollapse(itemsAfterCollapse, childrenArray);
  const collapsedChildren = calculateCollapsedChildren(
    childrenArray,
    childrenBeforeCollapse,
    childrenAfterCollapse,
  );
  const firstItem: ReactNode = childrenArray[0];
  const lastItem: ReactNode = childrenArray[childrenArray.length - 1];
  const collapseFirstItem: ReactNode = collapsedChildren[0];
  const collapseLastItem: ReactNode = collapsedChildren[collapsedChildren.length - 1];
  const afterCollapseFirstItem: ReactNode = childrenAfterCollapse[0];
  const [collapseItemsVisible, setCollapseItemsVisible] = useState(false);
  const { processBreadcrumbItem } = useBreadcrumb();

  const classes = {
    container: cn(
      'flex items-center',
      'px-4 py-2 w-fit overflow-scroll',
      'rounded-xl',
      'scrollbar-track-transparent scrollbar-w-0',
      className,
    ),
    list: cn('flex items-center', [BreadcrumbSpacings[spacing]]),
  };

  const beforeCollapseItems: Array<ReactNode> = childrenBeforeCollapse.map((item) =>
    processBreadcrumbItem({
      item,
      identifier: BreadcrumbItemIdentifier.before,
      isFirst: item === firstItem,
      isLast: false,
      separator,
    }),
  );

  const collapseItems: Array<ReactNode> = collapsedChildren.map((item) =>
    processBreadcrumbItem({
      collapse: collapseMode === CollapseMode.dropdown,
      identifier: BreadcrumbItemIdentifier.collapse,
      isFirst: item === collapseFirstItem,
      isLast: item === collapseLastItem,
      item,
      separator,
    }),
  );

  const afterCollapseItems: Array<ReactNode> = childrenAfterCollapse.map((item) =>
    processBreadcrumbItem({
      identifier: BreadcrumbItemIdentifier.after,
      item,
      isFirst: item === afterCollapseFirstItem,
      isLast: item === lastItem,
      separator,
    }),
  );

  const allItems: Array<ReactNode> = childrenArray.map((item) =>
    processBreadcrumbItem({
      item,
      isFirst: item === firstItem,
      isLast: item === lastItem,
      separator,
    }),
  );

  const handleCollapseItemsToggle = () => setCollapseItemsVisible(!collapseItemsVisible);

  const renderCollapsedItems = (item: Array<ReactNode>) => {
    switch (collapseMode) {
      case CollapseMode.dropdown:
        return (
          <CollapseDropdown
            collapsedItems={item}
            collapseItemsVisible={collapseItemsVisible}
            handleCollapseItemsToggle={handleCollapseItemsToggle}
            isActive={collapseItemsVisible}
          />
        );

      default:
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
    /**
     * Calculates the effective number of items to display before the collapse.
     * Ensures that at least one item is displayed by
     * selecting the maximum between
     */
    const effectiveItemsBeforeCollapse = Math.max(1, itemsBeforeCollapse);

    /**
     * Calculates the effective number of items to display after the collapse.
     * Ensures that at least one item is displayed by selecting
     * the maximum between
     */
    const effectiveItemsAfterCollapse = Math.max(1, itemsAfterCollapse);

    /**
     * Checks if the list should not collapse or if the
     * total number of items does not exceed the sum of effective items to
     * be display before and after collapse. In such cases, it renders
     * the full list without collapsing.
     */
    if (
      !isCollapse ||
      allItems.length <= effectiveItemsBeforeCollapse + effectiveItemsAfterCollapse
    )
      return <ol className={classes.list}>{allItems}</ol>;

    return (
      <ol className={classes.list}>
        {/* Items before the collapse */}
        {beforeCollapseItems}

        {/* Collapsible items */}
        <div className="relative">{renderCollapsedItems(collapseItems)}</div>

        {/* Items after the collapse */}
        {afterCollapseItems}
      </ol>
    );
  };

  return (
    <nav
      className={classes.container}
      onMouseLeave={() => setCollapseItemsVisible(false)}
      onKeyDown={(event) => event.key === 'Escape' && setCollapseItemsVisible(false)}
    >
      {renderBreadcrumbs()}
    </nav>
  );
};
