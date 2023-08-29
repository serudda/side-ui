import { CSSProperties } from 'react';
import cn from 'classnames';

export enum SpinnerSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

const Sizes: Record<SpinnerSize, string> = {
  [SpinnerSize.xs]: 'w-4 h-4 border-2',
  [SpinnerSize.sm]: 'w-5 h-5 border-2',
  [SpinnerSize.base]: 'w-6 h-6 border-3',
  [SpinnerSize.lg]: 'w-7 h-7 border-4',
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
   * Hides the track of the spinner
   */
  hideTrack?: boolean;

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
  size = SpinnerSize.base,
  style = {},
  isFullScreen = false,
  hideTrack = false,
}: SpinnerProps) => {
  const classes = {
    spinner: cn(className, 'flex items-center justify-center', {
      'h-full w-full': isFullScreen,
    }),
    stroke: cn('rounded-full', 'ease-linear animate-spin', Variants[variant], Sizes[size], {
      'border-transparent': hideTrack,
      'border-slate-700': !hideTrack,
    }),
  };

  return (
    <div aria-label="spinner" role="status" style={style} className={classes.spinner}>
      <div className={classes.stroke}></div>
    </div>
  );
};
