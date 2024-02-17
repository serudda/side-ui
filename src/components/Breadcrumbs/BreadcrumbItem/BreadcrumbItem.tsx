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
    container: cn('flex items-center gap-2', 'transition-colors', className),
  };

  const renderItem = () => {
    if (isLast) return <li className="select-none">{children}</li>;
    return (
      <li className={classes.container}>
        <a href={href}>{children}</a>
      </li>
    );
  };

  return renderItem();
};
