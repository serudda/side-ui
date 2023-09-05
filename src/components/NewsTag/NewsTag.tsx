import { type ReactNode } from 'react';
import { cn } from '@/common';
import { Icon, IconCatalog, IconStyle } from '@/components';

export enum NewsTagSize {
  xs = 'xs',
  sm = 'sm',
}

const SizesWithEndIcon: Record<NewsTagSize, string> = {
  [NewsTagSize.xs]: 'py-1 pl-3 pr-2 text-xs leading-5 font-medium',
  [NewsTagSize.sm]: 'py-1.5 pl-4 pr-3 text-sm leading-5 font-medium',
};

const SizesWithoutEndIcon: Record<NewsTagSize, string> = {
  [NewsTagSize.xs]: 'py-1 px-3 text-xs leading-5 font-medium',
  [NewsTagSize.sm]: 'py-1.5 px-4 text-sm leading-5 font-medium',
};

enum EndIconSize {
  xs = 'w-3.5 h-3.5',
  sm = 'w-4 h-4',
}

export enum NewsTagVariant {
  secondary = 'secondary',
}

const Variants: Record<NewsTagVariant, string> = {
  [NewsTagVariant.secondary]: 'bg-secondary-600/50 hover:bg-secondary-600/70 text-secondary-100',
};

const Borders: Record<NewsTagVariant, string> = {
  [NewsTagVariant.secondary]: 'ring-1 ring-inset ring-secondary-300/30',
};

export interface NewsTagProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Changes the size of the component, giving it more or less padding
   */
  size?: NewsTagSize;

  /**
   * If true, the component will display an icon on the right side
   */
  hasEndIcon?: boolean;

  /**
   * If true, the component will display a border
   */
  hasBorder?: boolean;

  /**
   * The shape of the component. It determines the importance in the hierarchy, for example, the contained button commands the most attention
   */
  variant?: NewsTagVariant;

  /**
   * Elements to display inside the Navbar.
   */
  children?: ReactNode;
}

/**
 * This component is used to display a tag in the news page
 */
export const NewsTag = ({
  children,
  size = NewsTagSize.sm,
  variant = NewsTagVariant.secondary,
  hasEndIcon = true,
  hasBorder = false,
  className,
}: NewsTagProps) => {
  const classes = {
    container: cn(
      'flex items-center gap-3',
      'whitespace-nowrap',
      'rounded-full',
      'cursor-pointer',
      Variants[variant],
      hasEndIcon ? SizesWithEndIcon[size] : SizesWithoutEndIcon[size],
      hasBorder && Borders[variant],
      className,
    ),
    endIcon: cn(EndIconSize[size]),
  };

  /* Render JSX */
  return (
    <div className={classes.container}>
      {children}
      {hasEndIcon && (
        <Icon
          icon={IconCatalog.chevronRight}
          iconStyle={IconStyle.bold}
          className={classes.endIcon}
        />
      )}
    </div>
  );
};
