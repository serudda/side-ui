import { Children, cloneElement, isValidElement } from 'react';
import { cn } from '@common';
import { AvatarSize, CountAvatar } from '@components';

const DEFAULT_MAX_AVATARS = 5;

export const PositiveMargins: Record<AvatarSize, string> = {
  [AvatarSize['2xs']]: 'ml-2',
  [AvatarSize.xs]: 'ml-2.5',
  [AvatarSize.sm]: 'ml-3',
  [AvatarSize.base]: 'ml-3.5',
  [AvatarSize.lg]: 'ml-4',
  [AvatarSize.xl]: 'ml-5',
};

export const NegativeMargins: Record<AvatarSize, string> = {
  [AvatarSize['2xs']]: '-ml-2',
  [AvatarSize.xs]: '-ml-2.5',
  [AvatarSize.sm]: '-ml-3',
  [AvatarSize.base]: '-ml-3.5',
  [AvatarSize.lg]: '-ml-4',
  [AvatarSize.xl]: '-ml-5',
};

export interface StackedAvatarProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  maxAvatars?: number;

  size?: AvatarSize;

  children?: React.ReactNode;
}

/**
 * This component is used to display a stacked avatar
 */
export const StackedAvatar = ({
  className,
  maxAvatars = DEFAULT_MAX_AVATARS,
  size = AvatarSize.base,
  children,
}: StackedAvatarProps) => {
  const classes = {
    container: cn('flex', className, PositiveMargins[size]),
    avatar: cn('block align-middle', NegativeMargins[size]),
  };

  const childrenArray = Children.toArray(children);

  const renderRemaining = () => {
    const remaining = childrenArray.length - maxAvatars;

    if (remaining < 1) return null;

    return <CountAvatar count={remaining} size={size} className={classes.avatar} />;
  };

  const newChildren = childrenArray.slice(0, maxAvatars).map((child) => {
    if (!isValidElement(child)) return null;

    return cloneElement(child, {
      className: classes.avatar,
      size,
      ...child.props,
    });
  });

  /* Render JSX */
  return (
    <div className={classes.container}>
      {newChildren}
      {renderRemaining()}
    </div>
  );
};
