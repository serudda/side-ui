import { cn } from '@common';
import { Image } from '@components';

export enum AvatarSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export enum AvatarBorder {
  white = 'white',
  black = 'black',
  primary = 'primary',
  slate = 'slate',
}

export const AvatarSizes: Record<AvatarSize, string> = {
  [AvatarSize.xs]: 'w-6 h-6',
  [AvatarSize.sm]: 'w-7 h-7',
  [AvatarSize.base]: 'w-8 h-8',
  [AvatarSize.lg]: 'w-10 h-10',
  [AvatarSize.xl]: 'w-12 h-12',
};

export const AvatarBorders: Record<AvatarBorder, string> = {
  [AvatarBorder.white]: 'ring-2 ring-white ring-offset-0',
  [AvatarBorder.black]: 'ring-2 ring-black ring-offset-0',
  [AvatarBorder.primary]: 'ring-2 ring-primary-500 ring-offset-0',
  [AvatarBorder.slate]: 'ring-2 ring-slate-200 ring-offset-0',
};

export interface AvatarProps {
  /**
   * Changes the size of the Spinner.
   */
  size?: AvatarSize;

  /**
   * Changes the border color of the Avatar.
   */
  border?: AvatarBorder;

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
  border,
  className,
}: AvatarProps) => {
  const classes = {
    avatar: cn(
      'flex items-center whitespace-nowrap overflow-hidden relative shrink-0 rounded-full',
      AvatarSizes[size],
      className,
      {
        [AvatarBorders[border || AvatarBorder.white]]: border,
      },
    ),
    image: cn('rounded-full inline-block -indent-96 align-middle', AvatarSizes[size]),
  };

  return (
    <div className={classes.avatar}>
      <Image className={classes.image} src={imgUrl} alt={altText} noImg={<></>} />
    </div>
  );
};
