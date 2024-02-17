import { ReactNode, cloneElement, isValidElement } from 'react';
import { cn } from '@common';
import {
  AccentVariants,
  BreadcrumbVariant,
  CollapseMode,
  ItemsVariants,
  SeparatorVariants,
} from '@components';

export enum ItemIdentifier {
  before = 'before',
  collapse = 'collapse',
  after = 'after',
}

interface ProcessBreadcrumbItemProps {
  /**
   * Determines if the breadcrumb item should be collapsed.
   */
  collapse?: boolean;

  /**
   * Specifies the collapse mode, affecting how breadcrumb items are displayed in a collapsed state.
   */
  collapseMode?: CollapseMode;

  /**
   * Indicates whether the breadcrumb item should be visually marked as active in a collapse scenario.
   */
  collapseItemsVisible?: boolean;

  /**
   * Identifies the position of the breadcrumb item in relation to the collapse logic.
   */
  identifier?: ItemIdentifier;

  /**
   * The content of the breadcrumb item, typically a React element.
   */
  item: ReactNode;

  /**
   * Indicates if this is the first item in the breadcrumb trail.
   */
  isFirst?: boolean;

  /**
   * Indicates if this is the last item in the breadcrumb trail.
   */
  isLast?: boolean;

  /**
   * Custom separator to be used between breadcrumb items.
   */
  separator: string | ReactNode;

  /**
   * Specifies the visual variant of the breadcrumb item.
   */
  variant: BreadcrumbVariant;
}
export const processBreadcrumbItem = ({
  collapse,
  collapseMode,
  collapseItemsVisible,
  identifier,
  item,
  isFirst = false,
  isLast = false,
  separator,
  variant,
}: ProcessBreadcrumbItemProps) => {
  if (!isValidElement(item)) return null;

  const classes = {
    firstSeparator: cn(
      [SeparatorVariants[variant]],
      {
        hidden:
          collapseItemsVisible &&
          identifier === ItemIdentifier.after &&
          collapseMode === CollapseMode.spread,
      },
      'select-none',
    ),
    secondSeparator: cn(
      [SeparatorVariants[variant]],
      {
        hidden: isLast && isFirst,
      },
      'select-none',
    ),
  };

  const className =
    (isFirst && identifier !== ItemIdentifier.after) || isLast
      ? AccentVariants[variant]
      : ItemsVariants[variant];

  const element = cloneElement(item, {
    className,
    isLast,
    ...item.props,
  });

  if (isFirst && identifier === ItemIdentifier.after)
    return (
      <>
        <span className={classes.firstSeparator}>{separator}</span>
        {element}
        <span className={classes.secondSeparator}>{separator}</span>
      </>
    );

  if (isLast || collapse) return element;

  return (
    <>
      {element}
      <span className={classes.firstSeparator}>{separator}</span>
    </>
  );
};
