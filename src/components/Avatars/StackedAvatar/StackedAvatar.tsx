import { Children, cloneElement, isValidElement } from 'react';
import { cn } from '@common';
import {
  AvatarBorder,
  AvatarSize,
  CountAvatar,
  Tooltip,
  TooltipPlacement,
  TooltipSize,
} from '@components';

const DEFAULT_MAX_AVATARS = 5;

export enum StackedAvatarSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export const PositiveMargins: Record<StackedAvatarSize, string> = {
  [StackedAvatarSize.xs]: 'ml-1',
  [StackedAvatarSize.sm]: 'ml-1.5',
  [StackedAvatarSize.base]: 'ml-2',
  [StackedAvatarSize.lg]: 'ml-2.5',
  [StackedAvatarSize.xl]: 'ml-3',
};

export const NegativeMargins: Record<StackedAvatarSize, string> = {
  [StackedAvatarSize.xs]: '-ml-1',
  [StackedAvatarSize.sm]: '-ml-1.5',
  [StackedAvatarSize.base]: '-ml-2',
  [StackedAvatarSize.lg]: '-ml-2.5',
  [StackedAvatarSize.xl]: '-ml-3',
};

export interface StackedAvatarProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Specify an optional border to be added to the component
   */
  border?: AvatarBorder;

  /**
   * Specify an optional max number of avatars to be displayed
   */
  maxAvatars?: number;

  /**
   * Specify an optional size of each avatar
   */
  size?: AvatarSize;

  /**
   * Specify whether the avatar has a tooltip
   */
  hasTooltip?: boolean;

  /**
   * Set the avatar's children
   */
  children?: React.ReactNode;
}

/**
 * This component is used to display a stacked avatar
 */
export const StackedAvatar = ({
  className,
  hasTooltip = false,
  border,
  maxAvatars = DEFAULT_MAX_AVATARS,
  size = AvatarSize.base,
  children,
}: StackedAvatarProps) => {
  const classes = {
    container: cn('flex', className, PositiveMargins[size]),
    avatar: (className: string) => cn('align-middle', NegativeMargins[size], className),
    count: cn('align-middle', NegativeMargins[size], {
      'ring-2 ring-slate-300 dark:ring-slate-800 ring-offset-0': border,
    }),
  };

  const childrenArray = Children.toArray(children);

  const renderRemaining = () => {
    const remaining = childrenArray.length - maxAvatars;
    if (remaining < 1) return null;

    return <CountAvatar count={remaining} size={size} className={classes.count} />;
  };

  const newChildren = childrenArray.slice(0, maxAvatars).map((child) => {
    if (!isValidElement(child)) return null;

    const element = cloneElement(child, {
      className: classes.avatar(child.props.className),
      size,
      border,
      ...child.props,
    });

    if (!hasTooltip) return element;

    return (
      <Tooltip
        placement={TooltipPlacement.top}
        text={child.props.altText || 'avatar image'}
        size={TooltipSize.sm}
        delayShow={500}
      >
        <Tooltip.Trigger>{element}</Tooltip.Trigger>
      </Tooltip>
    );
  });

  /* Render JSX */
  return (
    <div className={classes.container}>
      {newChildren}
      {renderRemaining()}
    </div>
  );
};
