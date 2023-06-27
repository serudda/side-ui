import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import { Icon, IconCatalog } from '@/components';

export enum StepperSize {
  sm = 'sm',
}

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
   * Changes the size of the Stepperr.
   */
  size?: StepperSize;

  /**
   * Specify whether the Stepper should be disabled.
   */
  isDisabled?: boolean;

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
      size = StepperSize.sm,
      isDisabled = false,
      isRequired = false,
      isReadOnly = false,
      className,
      onChange,
      onBlur,
      onFocus,
    },
    ref,
  ) => {
    const classes = {
      container: cn(className),
    };

    const [currentValue, setCurrentValue] = useState(value || minValue);

    useEffect(() => {
      let newValue = value || minValue;
      if (newValue < minValue) newValue = minValue;
      if (newValue > maxValue) newValue = maxValue;

      setCurrentValue(newValue);
    }, [value, minValue, maxValue]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      let newValue = parseInt(event.target.value, 10);
      if (isNaN(newValue)) newValue = 0;

      setCurrentValue(newValue);
      if (onChange) onChange(newValue);
    };

    const handleInputBlur = (event: FocusEvent<HTMLInputElement>): void => {
      if (onBlur) onBlur(event);
    };

    const handleInputFocus = (event: FocusEvent<HTMLInputElement>): void => {
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
          <label className="mb-2 block text-sm font-semibold leading-4 text-slate-400" htmlFor={id}>
            {label}
            {isRequired && <span className="ml-1 text-rose-400">*</span>}
          </label>
        )}
        <div className="inline-flex h-10 rounded-md border border-slate-700 bg-slate-900 p-1 text-white">
          {/* MINUS BUTTON */}
          <button
            className="cursor-pointer select-none rounded bg-slate-800 p-1 hover:bg-slate-950"
            onClick={handleMinusClick}
          >
            <Icon icon={IconCatalog.minusSmall} className="h-[22px] w-[22px]" />
          </button>

          {/* COUNTER */}
          <input
            id={id}
            data-testid={dataTestId}
            ref={ref}
            name={name}
            className="w-10 appearance-none border-none bg-transparent text-center font-semibold text-slate-50 outline-none"
            disabled={isDisabled}
            value={currentValue}
            readOnly={isReadOnly}
            required={isRequired}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
          />

          {/* PLUS BUTTON */}
          <button
            className="cursor-pointer select-none rounded bg-slate-800 p-1 hover:bg-slate-950"
            onClick={handlePlusClick}
          >
            <Icon icon={IconCatalog.plusSmall} className="h-[22px] w-[22px]" />
          </button>
        </div>
      </div>
    );
  },
);
