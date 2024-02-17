import { Children, ReactNode, useState } from 'react';
import { cn } from '@common';
import { CollapseDropdown, CollapsedSpread } from '@components';
import { ItemIdentifier, processBreadcrumbItem } from './utils/helper';

export enum CollapseMode {
  dropdown = 'dropdown',
  spread = 'spread',
}

export enum BreadcrumbSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export enum BreadcrumbSpacing {
  tight = 'tight',
  snug = 'snug',
  normal = 'normal',
  relaxed = 'relaxed',
  loose = 'loose',
}

export enum BreadcrumbVariant {
  primary = 'primary',
  secondary = 'secondary',
  neutral = 'neutral',
}

export const BreadcrumbSpacings: Record<BreadcrumbSpacing, string> = {
  [BreadcrumbSpacing.tight]: 'gap-1',
  [BreadcrumbSpacing.snug]: 'gap-2',
  [BreadcrumbSpacing.normal]: 'gap-3',
  [BreadcrumbSpacing.relaxed]: 'gap-4',
  [BreadcrumbSpacing.loose]: 'gap-5',
};

export const BreadcrumbSizes: Record<BreadcrumbSize, string> = {
  [BreadcrumbSize.xs]: 'text-xs',
  [BreadcrumbSize.sm]: 'text-sm',
  [BreadcrumbSize.base]: 'text-base',
  [BreadcrumbSize.lg]: 'text-lg',
  [BreadcrumbSize.xl]: 'text-xl',
};

export const ItemsVariants: Record<BreadcrumbVariant, Array<string>> = {
  [BreadcrumbVariant.primary]: [
    'text-primary-500 hover:text-primary-300 ',
    'dark:text-primary-400 dark:hover:text-primary-700',
    'group-hover/dropdown:text-primary-600',
    'dark:group-hover/dropdown:text-primary-200',
  ],
  [BreadcrumbVariant.secondary]: [
    'text-secondary-200 hover:text-secondary-400',
    'dark:text-secondary-400 dark:hover:text-secondary-700',
    'group-hover/dropdown:text-secondary-600',
    'dark:group-hover/dropdown:text-secondary-700',
  ],
  [BreadcrumbVariant.neutral]: [
    'text-gray-400 hover:text-gray-700',
    'dark:text-gray-600 dark:hover:text-gray-300',
    'group-hover/dropdown:text-gray-600',
    'dark:group-hover/dropdown:text-gray-200',
  ],
};

export const SeparatorVariants: Record<BreadcrumbVariant, string> = {
  [BreadcrumbVariant.primary]: 'text-primary-400 dark:text-primary-400',
  [BreadcrumbVariant.secondary]: 'text-secondary-200 dark:text-secondary-400',
  [BreadcrumbVariant.neutral]: 'text-gray-400 dark:text-gray-600',
};

export const BorderVariants: Record<BreadcrumbVariant, string> = {
  [BreadcrumbVariant.primary]: 'ring-primary-500/30 dark:ring-primary-500/20',
  [BreadcrumbVariant.secondary]: 'ring-secondary-500/30 dark:ring-secondary-500/20',
  [BreadcrumbVariant.neutral]: 'ring-gray-500/30 dark:ring-gray-500/20',
};

export const AccentVariants: Record<BreadcrumbVariant, Array<string>> = {
  [BreadcrumbVariant.primary]: [
    'text-primary-600 hover:text-primary-300',
    'dark:text-primary-500 dark:hover:text-primary-800',
    'last:hover:text-primary-600 last:dark:hover:text-primary-500',
  ],
  [BreadcrumbVariant.secondary]: [
    'text-secondary-500 hover:text-secondary-900 ',
    'dark:text-secondary-700 last:hover:text-secondary-400',
    'last:hover:text-secondary-500 last:dark:hover:text-secondary-700',
  ],

  [BreadcrumbVariant.neutral]: [
    'text-gray-800 hover:text-gray-400 ',
    'dark:text-gray-300 dark:hover:text-gray-600',
    'last:hover:text-gray-800 last:dark:hover:text-gray-300',
  ],
};

export const SolidVariants: Record<BreadcrumbVariant, string> = {
  [BreadcrumbVariant.primary]: 'bg-primary-500 dark:bg-primary-800',
  [BreadcrumbVariant.secondary]: 'bg-secondary-500 dark:bg-secondary-800',
  [BreadcrumbVariant.neutral]: 'bg-gray-500 dark:bg-gray-800',
};

interface BreadcrumbProps {
  /**
   * Optional CSS class for styling accent items.
   */
  accentVariant?: BreadcrumbVariant;

  /**
   * An array of ReactNode elements representing the breadcrumb items.
   */
  body: Array<ReactNode>;

  /**
   * Optional CSS class for additional styling.
   */
  className?: string;

  /**
   * Determines whether a border is displayed around the breadcrumb.
   */
  hasBorder?: boolean;

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
   * Optional CSS class for styling the Breadcrumb Items.
   */
  variant?: BreadcrumbVariant;

  /**
   * Custom separator between breadcrumb items.
   */
  separator?: string | ReactNode;

  /**
   * Defines the spacing between breadcrumb items.
   */
  spacing?: BreadcrumbSpacing;

  /**
   * Sets the size of the breadcrumb text.
   */
  size?: BreadcrumbSize;
}

/**
 * Breadcrumbs provide a navigation trail for users to follow back to the starting or entry point of a website or application.
 * They offer a hierarchical structure of the current page in relation to the website's structure and help users understand their current location.
 */
export const Breadcrumb = ({
  accentVariant = BreadcrumbVariant.neutral,
  body: children,
  className,
  collapseMode = CollapseMode.spread,
  hasBorder = false,
  isCollapse = false,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  separator = '/',
  size = BreadcrumbSize.lg,
  spacing = BreadcrumbSpacing.normal,
  variant = BreadcrumbVariant.neutral,
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
      {
        'ring-1': hasBorder,
        [BorderVariants[variant]]: hasBorder,
      },
      AccentVariants[accentVariant],
      BreadcrumbSizes[size],
      BreadcrumbSpacings[spacing],
      className,
    ),
    list: cn('flex items-center', [BreadcrumbSpacings[spacing]]),
  };

  const startItems = childrenBeforeCollapse.map((item) =>
    processBreadcrumbItem({
      accentVariant,
      item,
      isFirst: item === firstItem,
      isLast: item === lastItem,
      separator,
      variant,
    }),
  );

  const collapseItems = collapsedChildren.map((item) =>
    processBreadcrumbItem({
      accentVariant,
      collapse: collapseMode === CollapseMode.dropdown,
      item,
      separator,
      variant,
    }),
  );

  const endItems = childrenAfterCollapse.map((item) =>
    processBreadcrumbItem({
      accentVariant,
      collapseMode,
      collapseItemsVisible,
      identifier: ItemIdentifier.after,
      item,
      isFirst: item === childrenAfterCollapse[0],
      isLast: item === lastItem,
      separator,
      variant,
    }),
  );

  const allItems = childrenArray.map((item) =>
    processBreadcrumbItem({
      accentVariant,
      item,
      isFirst: item === firstItem,
      isLast: item === lastItem,
      separator,
      variant,
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
