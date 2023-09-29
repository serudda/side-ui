import { cn } from '@common';
import { Avatar, AvatarSize, Sizes as AvatarSizes, type AvatarProps } from '@components';

const LabelSizes: Record<AvatarSize, string> = {
  [AvatarSize['2xs']]: 'text-[10px]',
  [AvatarSize.xs]: 'text-xs',
  [AvatarSize.sm]: 'text-sm',
  [AvatarSize.base]: 'text-sm',
  [AvatarSize.lg]: 'text-base',
  [AvatarSize.xl]: 'text-lg',
};

export interface CountAvatarProps extends AvatarProps {
  count: number;
}

/**
 * This component is used to display a count avatar to show the number of remaining avatars
 */
export const CountAvatar = ({
  className,
  count = 0,
  size = AvatarSize.base,
  ...restProps
}: CountAvatarProps) => {
  const classes = {
    container: cn('flex items-center justify-center relative overflow-hidden', className),
    countContainer: cn(
      'absolute z-[1] flex items-center justify-center bg-black rounded-full',
      AvatarSizes[size],
    ),
    count: cn('text-slate-50 font-semibold', LabelSizes[size]),
  };

  return (
    <div className={classes.container}>
      <div className={classes.countContainer}>
        <span className={classes.count}>+{count}</span>
      </div>

      <Avatar size={size} {...restProps} />
    </div>
  );
};
