import { cn } from '@/common';
import { Image } from '@/components';

export enum AvatarSize {
  '2xs' = '2xs',
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

const Sizes: Record<AvatarSize, string> = {
  [AvatarSize['2xs']]: 'w-5 h-5',
  [AvatarSize.xs]: 'w-6 h-6',
  [AvatarSize.sm]: 'w-7 h-7',
  [AvatarSize.base]: 'w-8 h-8',
  [AvatarSize.lg]: 'w-10 h-10',
  [AvatarSize.xl]: 'w-12 h-12',
};

export interface AvatarProps {
  /**
   * Changes the size of the Spinner.
   */
  size?: AvatarSize;

  /**
   * Specify an optional alt text for the image
   */
  altText?: string;

  /**
   * Specify an optional image url
   */
  imgUrl?: string;

  /**
   * Specify an optional className to be added to the component
   */
  className?: string;
}

/**
 * Avatars are used to show a thumbnail representation of an individual or business in the interface.
 */
export const Avatar = ({
  size = AvatarSize.sm,
  altText = 'avatar image',
  imgUrl = './default-avatar.svg',
  className,
}: AvatarProps) => {
  const classes = {
    avatar: cn('rounded-full relative', Sizes[size], className),
    image: cn('rounded-full', Sizes[size]),
  };

  return (
    <div className={classes.avatar}>
      <Image className={classes.image} src={imgUrl} alt={altText} noImg={<></>} />
    </div>
  );
};
