import { ReactNode } from 'react';
import { cn } from '@common';

export interface BreadcrumbItemProps {
  children: ReactNode;
  className?: string;
  href?: string;
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

  const renderLi = () => {
    if (isLast) return <li className="select-none">{children}</li>;
    return (
      <li className={classes.container}>
        <a href={href}>{children}</a>
      </li>
    );
  };

  return renderLi();
};
