import { ReactNode, cloneElement, isValidElement, useCallback } from 'react';
import { breadcrumbItemIdentifier, cn } from '@common';

interface ProcessBreadcrumbItemProps {
  /**
   * Determines if the breadcrumb item should be collapsed.
   */
  collapse?: boolean;

  /**
   * Identifies the position of the breadcrumb item in relation to the collapse logic.
   */
  identifier?: breadcrumbItemIdentifier;

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
  separator?: string | ReactNode;
}

export const useBreadcrumb = () => {
  const processItem = useCallback(
    ({
      collapse,
      identifier,
      item,
      isFirst = false,
      isLast = false,
      separator,
    }: ProcessBreadcrumbItemProps): ReactNode | null => {
      if (!item || !isValidElement(item)) return null;

      const classes = {
        separator: cn('text-gray-400 dark:text-gray-600', 'select-none', {
          'last:hidden': isLast && identifier === breadcrumbItemIdentifier.after,
        }),
      };

      const element = cloneElement(item, { isLast, identifier, ...item.props });

      const result: ReactNode[] = [element];

      switch (true) {
        case isFirst && identifier === breadcrumbItemIdentifier.after:
          result.unshift(
            <span key="first-separator" className={classes.separator}>
              {separator}
            </span>,
          );

          result.push(
            <span key="second-separator" className={classes.separator}>
              {separator}
            </span>,
          );

          break;

        case !isLast && !collapse:
          result.push(
            <span key="following-separator" className={classes.separator}>
              {separator}
            </span>,
          );
          break;
      }

      return <>{result}</>;
    },
    [],
  );

  return processItem;
};
