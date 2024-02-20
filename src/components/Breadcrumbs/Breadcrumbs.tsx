import { Children, ReactNode, cloneElement, isValidElement, useState } from 'react';
import { cn } from '@common';
import { CollapseDropdown, CollapsedSpread } from '@components';
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
  all = 'all',
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

interface BreadcrumbsProps {
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
 * Breadcrumbs provide a navigation trail for users to
 * follow back to the starting or entry point of a website or application.
 * They offer a hierarchical structure of the current page in
 * relation to the website's structure and help users understand their current location.
 */
export const Breadcrumbs = ({
  children,
  className,
  collapseMode = CollapseMode.spread,
  isCollapse = false,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  separator = '/',
  spacing = BreadcrumbSpacing.normal,
}: BreadcrumbsProps) => {
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

  const classes = {
    container: cn(
      'flex items-center',
      'px-4 py-2 w-fit overflow-scroll',
      'rounded-xl',
      'scrollbar-track-transparent scrollbar-w-0',
      className,
    ),
    list: cn('flex items-center', [BreadcrumbSpacings[spacing]]),
    separator: (isLast: boolean, identifier: BreadcrumbItemIdentifier) =>
      cn('text-gray-400 dark:text-gray-600', 'select-none', {
        'last:hidden': isLast && identifier === BreadcrumbItemIdentifier.after,
      }),
  };

  const parseBreadcrumb = (
    child: ReactNode,
    separator: string | ReactNode,
    identifier: BreadcrumbItemIdentifier,
    isFirst = false,
    isLast = false,
    isCollapse = false,
  ) => {
    if (!child || !isValidElement(child)) return null;

    const element = cloneElement(child, { isLast, identifier, ...child.props });
    const result: Array<ReactNode> = [element];

    switch (true) {
      case isFirst && identifier === BreadcrumbItemIdentifier.after:
        result.unshift(
          <span key="left-separator" className={classes.separator(isLast, identifier)}>
            {separator}
          </span>,
        );

        result.push(
          <span key="right-separator" className={classes.separator(isLast, identifier)}>
            {separator}
          </span>,
        );
        break;

      case !isLast && !isCollapse:
        result.push(
          <span key="following-separator" className={classes.separator(isLast, identifier)}>
            {separator}
          </span>,
        );
        break;
    }

    return <>{result}</>;
  };

  const beforeCollapseItems: Array<ReactNode> = childrenBeforeCollapse.map((child) =>
    parseBreadcrumb(child, separator, BreadcrumbItemIdentifier.before, child === firstItem),
  );

  const collapseItems: Array<ReactNode> = collapsedChildren.map((child) =>
    parseBreadcrumb(
      child,
      separator,
      BreadcrumbItemIdentifier.collapse,
      child === collapseFirstItem,
      child === collapseLastItem,
      collapseMode === CollapseMode.dropdown,
    ),
  );
  const afterCollapseItems: Array<ReactNode> = childrenAfterCollapse.map((child) =>
    parseBreadcrumb(
      child,
      separator,
      BreadcrumbItemIdentifier.after,
      child === afterCollapseFirstItem,
      child === lastItem,
    ),
  );

  const allItems: Array<ReactNode> = childrenArray.map((child) =>
    parseBreadcrumb(
      child,
      separator,
      BreadcrumbItemIdentifier.all,
      child === firstItem,
      child === lastItem,
    ),
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
            spacing={spacing}
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
