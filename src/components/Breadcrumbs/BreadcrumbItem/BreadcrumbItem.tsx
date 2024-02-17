import { ReactNode } from 'react';
import { cn } from '@common';

export interface BreadcrumbItemProps {
  /**
   * Content of the breadcrumb item.
   */
  children: ReactNode;

  /**
   * Optional CSS class for styling.
   */
  className?: string;

  /**
   * URL for the breadcrumb item. Optional for the last item.
   */
  href?: string;

  /**
   * Marks if this item is the last in the breadcrumb trail.
   */
  isLast?: boolean;
}

export const BreadcrumbItem = ({
  children,
  className,
  href,
  isLast = false,
}: BreadcrumbItemProps) => {
  const classes = {
    container: cn(
      'flex items-center gap-2',
      'text-gray-400 hover:text-gray-700',
      'dark:text-gray-600 dark:hover:text-gray-300',
      'has-[span]:text-gray-700 dark:has-[span]:text-gray-400',
      'group-hover/dropdown:text-gray-700 dark:group-hover/dropdown:text-gray-300',
      'transition-colors',
      className,
    ),
  };

  const renderItem = () => {
    if (isLast)
      return (
        <li className={classes.container}>
          <span>{children}</span>
        </li>
      );
    return (
      <li className={classes.container}>
        <a href={href}>{children}</a>
      </li>
    );
  };

  return renderItem();
};
