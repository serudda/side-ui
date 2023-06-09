import { CSSProperties } from 'react';
import cn from 'classnames';

export enum SpinnerSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
}

const Sizes: Record<SpinnerSize, string> = {
  [SpinnerSize.xs]: 'w-4 h-4 border-2',
  [SpinnerSize.sm]: 'w-8 h-8 border-4',
  [SpinnerSize.md]: 'w-16 h-16 border-8',
};

export enum SpinnerVariant {
  primary = 'primary',
  secondary = 'secondary',
  neutral = 'neutral',
}

const Variants: Record<SpinnerVariant, string> = {
  [SpinnerVariant.primary]: 'border-t-primary-500',
  [SpinnerVariant.secondary]: 'border-t-secondary-400',
  [SpinnerVariant.neutral]: 'border-t-white',
};

export interface SpinnerProps {
  /**
   * Class names used for external styles
   */
  className?: string;

  /**
   * External styles of wrapper spinner
   */
  style?: CSSProperties;

  /**
   * Changes the size of the Spinner.
   */
  size?: SpinnerSize;

  /**
   * The variant of the component. It supports those theme colors that makes sense for this component.
   */
  variant?: SpinnerVariant;

  /**
   * Set full width and full height
   */
  isFullScreen?: boolean;
}

/**
 * A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing.
 * Use a Spinner when the content to be loaded is unknown or unpredictable.
 */
export const Spinner = ({
  className,
  variant = SpinnerVariant.primary,
  size = SpinnerSize.md,
  style = {},
  isFullScreen = false,
}: SpinnerProps) => {
  const classes = {
    spinner: cn(className, 'flex items-center justify-center', {
      'h-full w-full': isFullScreen,
    }),
    stroke: cn(
      'rounded-full',
      'border-slate-700',
      'ease-linear animate-spin',
      Variants[variant],
      Sizes[size],
    ),
  };

  return (
    <div aria-label="spinner" role="status" style={style} className={classes.spinner}>
      <div className={classes.stroke}></div>
    </div>
  );
};
