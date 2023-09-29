import { cn } from '@common';
import { AvatarSize, AvatarSizes, type AvatarProps } from '@components';

export enum CountAvatarSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

const LabelSizes: Record<CountAvatarSize, string> = {
  [CountAvatarSize.xs]: 'text-xs',
  [CountAvatarSize.sm]: 'text-sm',
  [CountAvatarSize.base]: 'text-sm',
  [CountAvatarSize.lg]: 'text-base',
  [CountAvatarSize.xl]: 'text-lg',
};

export interface CountAvatarProps extends AvatarProps {
  count: number;
}

/**
 * This component is used to display a count avatar to show the number of remaining avatars
 */
export const CountAvatar = ({ className, count = 0, size = AvatarSize.base }: CountAvatarProps) => {
  const classes = {
    container: cn(
      'flex items-center justify-center relative align-middle bg-slate-200 dark:bg-black rounded-full',
      AvatarSizes[size],
      className,
    ),
    count: cn('text-slate-950 dark:text-slate-50 font-semibold', LabelSizes[size]),
  };

  return (
    <div className={classes.container}>
      <span className={classes.count}>+{count}</span>
    </div>
  );
};
