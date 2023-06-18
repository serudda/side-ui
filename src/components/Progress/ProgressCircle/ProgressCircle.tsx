import { useEffect, useState } from 'react';
import cn from 'classnames';

export enum ProgressCircleSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

const Sizes: Record<ProgressCircleSize, string> = {
  [ProgressCircleSize.xs]: 'h-3 w-3',
  [ProgressCircleSize.sm]: 'h-4 w-4',
  [ProgressCircleSize.base]: 'h-5 w-5',
  [ProgressCircleSize.lg]: 'h-6 w-6',
};

export enum ProgressCircleVariant {
  primary = 'primary',
  secondary = 'secondary',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

const Variants: Record<ProgressCircleVariant, string> = {
  [ProgressCircleVariant.primary]: 'stroke-primary-500',
  [ProgressCircleVariant.secondary]: 'stroke-secondary-300',
  [ProgressCircleVariant.neutral]: 'stroke-slate-50',
  [ProgressCircleVariant.success]: 'stroke-green-400',
  [ProgressCircleVariant.warning]: 'stroke-yellow-400',
  [ProgressCircleVariant.error]: 'stroke-red-400',
};

export interface ProgressCircleProps {
  /**
   * Sets a max value
   */
  maxValue: number;

  /**
   * Sets the progress as a value between 0 and maxValue
   */
  value: number;

  /**
   * The shape of the component. It determines the importance in the hierarchy, for example, the contained button commands the most attention
   */
  variant?: ProgressCircleVariant;

  /**
   * 	Adjusts the size of the component
   */
  size?: ProgressCircleSize;

  /**
   * Specify an optional className to be added to the component
   */
  className?: string;
}

/**
 * ProgressCircle is a component used to display a progress circle.
 */
export const ProgressCircle = ({
  value,
  maxValue,
  variant = ProgressCircleVariant.primary,
  size = ProgressCircleSize.sm,
  className,
}: ProgressCircleProps) => {
  const [percent, setPercent] = useState(Math.floor((value * 100) / maxValue));

  const classes = {
    progressCircle: cn(className, Sizes[size]),
    track: cn('fill-none stroke-slate-700'),
    indicator: cn('fill-none transition-all duration-500 ease-in-out', {
      [Variants[variant]]: percent < 80,
      [Variants.warning]: percent >= 80 && percent < 100,
      [Variants.error]: percent === 100,
    }),
  };

  useEffect(() => setPercent(Math.floor((value * 100) / maxValue)), [value, maxValue]);

  /* Render JSX */
  return (
    <svg viewBox="0 0 36 36" className={classes.progressCircle}>
      <path
        className={classes.track}
        stroke-dasharray="100, 100"
        strokeWidth={3}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      ></path>
      <path
        className={classes.indicator}
        stroke-dasharray={`${percent}, 100`}
        strokeWidth={3.5}
        strokeLinecap="round"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      ></path>
    </svg>
  );
};
