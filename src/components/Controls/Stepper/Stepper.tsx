import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import { Icon, IconCatalog } from '@/components';

export interface StepperProps {
  /**
   * Specify an optional test ID to use on e2e tests.
   */
  dataTestId?: string;

  /**
   * Specify an optional id to be added to the component.
   */
  id?: string;

  /**
   * Set a label text
   */
  label?: string;

  /**
   * Initial value for the Stepper.
   */
  value?: number;

  /**
   * Name attr for the Stepper.
   **/
  name?: string;

  /**
   * The input is read only.
   */
  isReadOnly?: boolean;

  /**
   * Add extra styling and visual feedback.
   */
  isRequired?: boolean;

  /**
   * The minimum value that the input can have.
   */
  minValue?: number;

  /**
   * The maximum value that the input can have.
   */
  maxValue?: number;

  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * Provide a handler that is called whenever <input> is updated
   */
  onChange?: (newValue: number) => void;

  /**
   * Provide a handler that is called whenever <input> is blurred
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Provide a handler that is called whenever <input> is focused
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}

/**
 * Switch represents a physical switch that allows users to turn things on or off, where choosing an option results in an immediate action.
 */
export const Stepper = React.forwardRef<HTMLInputElement, StepperProps>(
  (
    {
      id,
      dataTestId,
      label,
      name,
      value,
      minValue = 0,
      maxValue = Infinity,
      isRequired = false,
      isReadOnly = false,
      className,
      onChange,
      onBlur,
      onFocus,
    },
    ref,
  ) => {
    const [currentValue, setCurrentValue] = useState(value || minValue);

    const classes = {
      container: cn(className),
      label: cn('mb-2 block text-sm font-semibold leading-4 text-slate-400'),
      stepperContainer: cn(
        'inline-flex h-10 rounded-md border border-slate-700 bg-slate-900 p-1 text-white',
      ),
      input: cn(
        'w-10 appearance-none border-none bg-transparent text-center font-semibold text-slate-50 outline-none',
      ),
      button: cn(
        'select-none rounded bg-slate-800 disabled:opacity-20 p-1 enabled:hover:bg-slate-950',
      ),
    };

    useEffect(() => {
      let newValue = value || minValue;
      if (newValue < minValue) newValue = minValue;
      if (newValue > maxValue) newValue = maxValue;

      setCurrentValue(newValue);
    }, [value, minValue, maxValue]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      let newValue = parseInt(event.target.value, 10);
      if (isNaN(newValue)) newValue = minValue;
      if (newValue < minValue) newValue = minValue;
      if (newValue > maxValue) newValue = maxValue;

      setCurrentValue(newValue);
      if (onChange) onChange(newValue);
    };

    const handleInputBlur = (event: FocusEvent<HTMLInputElement>): void => {
      if (onBlur) onBlur(event);
    };

    const handleInputFocus = (event: FocusEvent<HTMLInputElement>): void => {
      event.target.select();
      if (onFocus) onFocus(event);
    };

    const handleMinusClick = (): void => {
      const newValue = Math.max(currentValue - 1, minValue);
      setCurrentValue(newValue);
      if (onChange) onChange(newValue);
    };

    const handlePlusClick = (): void => {
      const newValue = Math.min(currentValue + 1, maxValue);
      setCurrentValue(newValue);
      if (onChange) onChange(newValue);
    };

    return (
      <div className={classes.container}>
        {label && (
          <label className={classes.label} htmlFor={id}>
            {label}
            {isRequired && <span className="ml-1 text-rose-400">*</span>}
          </label>
        )}
        <div className={classes.stepperContainer}>
          {/* MINUS BUTTON */}
          <button
            className={classes.button}
            onClick={handleMinusClick}
            disabled={currentValue === minValue}
          >
            <Icon icon={IconCatalog.minusSmall} className="h-[22px] w-[22px]" />
          </button>

          {/* COUNTER */}
          <input
            id={id}
            data-testid={dataTestId}
            ref={ref}
            name={name}
            className={classes.input}
            value={currentValue}
            readOnly={isReadOnly}
            required={isRequired}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
          />

          {/* PLUS BUTTON */}
          <button
            className={classes.button}
            onClick={handlePlusClick}
            disabled={currentValue === maxValue}
          >
            <Icon icon={IconCatalog.plusSmall} className="h-[22px] w-[22px]" />
          </button>
        </div>
      </div>
    );
  },
);
