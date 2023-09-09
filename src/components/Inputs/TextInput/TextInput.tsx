import React, { ChangeEvent, FocusEvent, InputHTMLAttributes, useState } from 'react';
import { Icon, IconCatalog, Spinner, SpinnerSize, SpinnerVariant } from '@/components';
// TODO: Something is wrong with the @/common import. In the host app, it's not working.
import { FormFieldState, Input, cn } from '@/common';

export interface TextInputProps
  extends Input,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'required'> {
  /**
   * The icon to display on the left side.
   */
  startIcon?: IconCatalog;

  /**
   * The icon to display on the right side.
   */
  endIcon?: IconCatalog;

  /**
   * The callback to get notified when the end icon was clicked.
   */
  onEndIconClick?: () => void;
}

/**
 * A Text Input enable the user to interact with and input short content and data.
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      isDisabled = false,
      isFullWidth = false,
      isReadOnly = false,
      isRounded = false,
      isLoading = false,
      isRequired = false,
      fieldState = FormFieldState.default,
      label,
      assistiveText,
      autoComplete = 'off',
      className,
      dataTestId,
      startIcon,
      endIcon,
      value = '',
      name,
      onChange,
      onBlur,
      onFocus,
      onEndIconClick,
      ...restOfProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const classes = {
      container: cn({ 'w-full': isFullWidth }, className),
      inputContainer: cn(
        'relative flex items-center overflow-hidden',
        'border',
        'h-10',
        'text-white',
        {
          'rounded-md p-2': !isRounded,
          'rounded-full px-4 py-2': isRounded,
          'w-full': isFullWidth,
          'border-slate-700': fieldState === FormFieldState.default,
          'border-rose-600': fieldState === FormFieldState.error && !isDisabled,
          'border-green-500': fieldState === FormFieldState.success && !isDisabled,
          'border-primary-800': fieldState === FormFieldState.default && isFocused,
          'bg-slate-900': !isDisabled,
          'bg-slate-900 border-transparent': isDisabled,
        },
      ),
      input: cn(
        'w-full',
        'transition duration-100 ease-out outline-none bg-transparent',
        'placeholder:text-slate-500 text-base',
        'disabled:cursor-not-allowed disabled:placeholder:text-slate-600',
      ),
      assistiveText: cn('mt-2 text-xs font-medium', {
        'text-slate-200': fieldState === FormFieldState.default,
        'text-rose-400': fieldState === FormFieldState.error,
        'text-green-400': fieldState === FormFieldState.success,
      }),
      startIcon: cn('flex items-center justify-center w-5 h-5 mr-1'),
      endIcon: cn('flex items-center justify-center w-5 h-5 ml-1'),
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (onChange) onChange(event);
    };

    const handleInputBlur = (event: FocusEvent<HTMLInputElement>): void => {
      setIsFocused(false);
      if (onBlur) onBlur(event);
    };

    const handleInputFocus = (event: FocusEvent<HTMLInputElement>): void => {
      setIsFocused(true);
      if (onFocus) onFocus(event);
    };

    const handleEndIconClick = (): void => {
      if (onEndIconClick) onEndIconClick();
    };

    const endContent = () => {
      if (isLoading)
        return (
          <Spinner
            className={classes.endIcon}
            size={SpinnerSize.xs}
            variant={SpinnerVariant.primary}
          />
        );

      if (endIcon) {
        if (onEndIconClick)
          return (
            <i
              role="button"
              tabIndex={0}
              onKeyDown={handleEndIconClick}
              onClick={handleEndIconClick}
            >
              <Icon className={classes.endIcon} icon={endIcon} />
            </i>
          );
        return <Icon className={classes.endIcon} icon={endIcon} />;
      }
    };

    /* Render JSX */
    return (
      <div className={classes.container}>
        {label && (
          <label className="mb-2 block text-sm font-semibold leading-4 text-slate-400" htmlFor={id}>
            {label}
            {isRequired && <span className="ml-1 text-rose-400">*</span>}
          </label>
        )}
        <div className={classes.inputContainer}>
          {startIcon && <Icon className={classes.startIcon} icon={startIcon} />}
          <input
            id={id}
            data-testid={dataTestId}
            ref={ref}
            name={name}
            className={classes.input}
            disabled={isDisabled}
            value={value}
            readOnly={isReadOnly}
            required={isRequired}
            autoComplete={autoComplete}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            {...restOfProps}
          />
          {endContent()}
        </div>
        {assistiveText && <span className={classes.assistiveText}>{assistiveText}</span>}
      </div>
    );
  },
);
