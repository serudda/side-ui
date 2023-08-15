import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';
import { Input } from '@/common';

export enum SwitchSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
}

const InnerSizes: Record<SwitchSize, string> = {
  [SwitchSize.xs]: 'w-8 h-4 rounded-2xl',
  [SwitchSize.sm]: 'w-9 h-5 rounded-2xl',
  [SwitchSize.base]: 'w-10 h-6 rounded-2xl',
};

const ThumbSizes: Record<SwitchSize, string> = {
  [SwitchSize.xs]: 'w-2 h-2 left-1 top-1',
  [SwitchSize.sm]: 'w-3 h-3 left-1 top-1',
  [SwitchSize.base]: 'w-4 h-4 left-1 top-1',
};

const ThumbActive: Record<SwitchSize, string> = {
  [SwitchSize.xs]: 'transform translate-x-4',
  [SwitchSize.sm]: 'transform translate-x-4',
  [SwitchSize.base]: 'transform translate-x-4',
};

export enum SwitchVariant {
  primary = 'primary',
  secondary = 'secondary',
}

const InnerVariants: Record<SwitchVariant, string> = {
  [SwitchVariant.primary]: 'bg-slate-600',
  [SwitchVariant.secondary]: 'bg-slate-600',
};

const InnerActiveVariants: Record<SwitchVariant, string> = {
  [SwitchVariant.primary]: 'bg-primary-500',
  [SwitchVariant.secondary]: 'bg-secondary-500',
};

const ThumbVariants: Record<SwitchVariant, string> = {
  [SwitchVariant.primary]: 'bg-white',
  [SwitchVariant.secondary]: 'bg-white',
};

export interface SwitchProps
  extends Input,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange'> {
  /**
   * Initial value for the Switch.
   */
  value?: boolean;

  /**
   * Changes the size of the Switch.
   */
  size?: SwitchSize;

  /**
   * Changes the variant of the Switch.
   */
  variant?: SwitchVariant;

  /**
   * Provide a handler that is called whenever <input> is updated
   */
  onChange?: (checked: boolean) => void;
}

/**
 * Switch represents a physical switch that allows users to turn things on or off,
 * where choosing an option results in an immediate action.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      id,
      name,
      value = false,
      label,
      size = SwitchSize.sm,
      variant = SwitchVariant.primary,
      isDisabled = false,
      className,
      onChange,
      ...restOfProps
    },
    ref,
  ) => {
    const [isOn, setIsOn] = useState(value);

    const classes = {
      container: cn(className, 'flex items-center'),
      inputContainer: cn('relative', InnerSizes[size], {
        'opacity-60 pointer-events-none': isDisabled,
      }),
      input: cn('absolute z-10 opacity-0', InnerSizes[size], {
        'cursor-pointer': !isDisabled,
      }),
      inner: cn(
        'absolute top-0',
        InnerSizes[size],
        !isOn ? InnerVariants[variant] : InnerActiveVariants[variant],
      ),
      thumb: cn(
        'rounded-full absolute shadow-sm',
        'transition-all duration-100 ease-in',
        ThumbSizes[size],
        ThumbVariants[variant],
        isOn && ThumbActive[size],
      ),
    };

    // Update value if default value changes
    useEffect(() => {
      setIsOn(value);
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (isDisabled) return;

      const checked = event?.target?.checked;
      setIsOn(checked);
      if (onChange) onChange(checked);
    };

    return (
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <input
            id={id}
            ref={ref}
            className={classes.input}
            name={name}
            role="switch"
            type="checkbox"
            checked={isOn}
            aria-checked={isOn}
            disabled={isDisabled}
            onChange={handleChange}
            {...restOfProps}
          ></input>
          <div className={classes.inner}>
            <div className={classes.thumb}></div>
          </div>
        </div>
        {label && (
          <label htmlFor={id} className="ml-3 text-sm font-medium text-neutral-50">
            {label}
          </label>
        )}
      </div>
    );
  },
);
