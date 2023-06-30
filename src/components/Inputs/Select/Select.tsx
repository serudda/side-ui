import React, {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  RefObject,
  SelectHTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from 'react';
import cn from 'classnames';
import { FormFieldState, Input, SelectOption, setMaxHeightByOptions } from '@/common';
import {
  Icon,
  IconCatalog,
  Popover,
  PopoverPlacement,
  Spinner,
  SpinnerSize,
  SpinnerVariant,
} from '@/components';
import { usePopupMenu } from '@/hooks';

export interface SelectProps
  extends Input,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'required' | 'onChange' | 'onFocus' | 'onBlur'> {
  /**
   * Set the select options list.
   */
  options: Array<SelectOption>;

  /**
   * Specify an optional className to be added to the popover menu.
   */
  menuClassName?: string;

  menuRef?: RefObject<HTMLElement>;

  /**
   * Provide a handler that is called when the select was clicked.
   */
  onSelectClick?: () => void;

  /**
   * Provide a handler that is called when an option was clicked.
   */
  onOptionClick?: (event: MouseEvent<HTMLDivElement>, option: SelectOption) => void;

  /**
   * Provide a handler that is called when an option was selected.
   */
  onChange?: (selectedOption: SelectOption, name: string | undefined) => void;

  /**
   * The callback to get notified when the cursor focus the Select component.
   */
  onFocus?: (event: ChangeEvent<HTMLDivElement>) => void;

  /**
   * The callback to get notified when the cursor blur the Select component.
   */
  onBlur?: (event: ChangeEvent<HTMLDivElement>) => void;
}

/**
 * This component could be thought of as a styled native select tag, but adding to it more
 * functionalities such as filtering, multi selecting, among others.
 * The source of the Select (Dropdown) is a list of options that the user can choose from
 * and apply to an input field to later be submitted.
 */
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      id,
      name,
      options = [],
      placeholder,
      label,
      assistiveText,
      value,
      fieldState = FormFieldState.default,
      isDisabled = false,
      isRequired = false,
      isFullWidth = false,
      isLoading = false,
      menuClassName,
      menuRef,
      className = '',
      onChange,
      onBlur,
      onFocus,
      onSelectClick,
      onOptionClick,
      dataTestId,
    },
    ref,
  ) => {
    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>();
    const [isFocused, setIsFocused] = useState(false);
    const defaultOption = useMemo(
      () => options.find((option) => option.value === value),
      [options, value],
    );

    const classes = {
      container: cn(className, { 'w-full': isFullWidth }),
      select: cn(
        'flex p-2 pl-3 cursor-pointer',
        'border rounded-md appearance-none outline-none truncate',
        'h-10',
        {
          'w-full': isFullWidth,
          'border-slate-700': fieldState === FormFieldState.default,
          'border-rose-600': fieldState === FormFieldState.error && !isDisabled,
          'border-green-500': fieldState === FormFieldState.success && !isDisabled,
          'border-primary-500': fieldState === FormFieldState.default && isFocused,
          'bg-slate-900 text-neutral-50': !isDisabled,
          'bg-slate-900 border-transparent cursor-default': isDisabled,
        },
      ),
      menu: cn(menuClassName),
      option: (item: SelectOption, index: number) =>
        cn('flex items-center space-x-3', 'p-2 rounded', {
          'bg-slate-950': index === cursor || item.value === selectedOption?.value,
          'hover:bg-slate-800': index !== cursor && item.value !== selectedOption?.value,
        }),
      placeholder: cn('flex flex-wrap items-center text-base truncate leading-[22px]', {
        'text-slate-400': !selectedOption?.label,
      }),
      endContainer: cn('flex items-center space-x-2 self-stretch flex-shrink-0 pl-1 ml-auto'),
      assistiveText: cn('mt-2 text-xs font-medium', {
        'text-slate-200': fieldState === FormFieldState.default,
        'text-rose-400': fieldState === FormFieldState.error,
        'text-green-400': fieldState === FormFieldState.success,
      }),
    };

    const [isOpen, setIsOpen] = useState(false);
    const { refs, cursor, onKeyDown, setOptionCursor } = usePopupMenu({
      options,
      onOptionChange: (option) => {
        setSelectedOption(option);
        if (onChange) onChange(option, name);
        handleClickOutside();
      },
    });

    useEffect(() => {
      setSelectedOption(defaultOption);
    }, [defaultOption]);

    const handleOptionClick =
      (option: SelectOption) =>
      (event: MouseEvent<HTMLDivElement>): void => {
        setOptionCursor(option);
        setSelectedOption(option);
        if (onOptionClick) onOptionClick(event, option);
        if (onChange) onChange(option, name);
        handleClickOutside();
      };

    const handleClickOutside = (): void => setIsOpen(false);

    const handleSelectClick = () => {
      if (isDisabled) return;

      setIsOpen(!isOpen);
      if (onSelectClick) onSelectClick();
    };

    const handleSelectBlur = (event: FocusEvent<HTMLDivElement>): void => {
      setIsFocused(false);
      if (onBlur) onBlur(event);
    };

    const handleSelectFocus = (event: FocusEvent<HTMLDivElement>): void => {
      if (isDisabled) return;

      setIsFocused(true);
      if (onFocus) onFocus(event);
    };

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (isOpen) onKeyDown(event);
    };

    const renderOptions = options.map((option, index) => (
      <div
        title={option.label}
        ref={refs[option.value]}
        key={index}
        role="option"
        className={classes.option(option, index)}
        onClick={handleOptionClick(option)}
      >
        <div className="flex w-full cursor-default truncate text-slate-50">{option.label}</div>
      </div>
    ));

    const popoverContent = (
      <div
        ref={menuRef as RefObject<HTMLDivElement>}
        role="listbox"
        style={setMaxHeightByOptions({
          listLength: options.length,
          maxOptions: 7,
          maxHeight: '300px',
        })}
        className="w-full flex-grow overflow-y-auto p-1.5 scrollbar-w-2 scrollbar-thumb-rounded-lg scrollbar-thumb-slate-700 scrollbar-track-slate-950"
      >
        {renderOptions}
      </div>
    );

    return (
      <div className={classes.container}>
        {label && (
          <label
            className="mb-2 block text-left text-sm font-semibold leading-4 text-slate-400"
            htmlFor={id}
          >
            {label}
            {isRequired && <span className="ml-1 text-rose-400">*</span>}
          </label>
        )}
        <Popover
          isOpen={isOpen}
          content={popoverContent}
          placement={PopoverPlacement.bottomStart}
          onClickOutside={handleClickOutside}
          hasArrow={false}
          menuClassName={classes.menu}
          menuFullWidth
          whitelistContainers={[menuRef, ref] as Array<RefObject<HTMLDivElement>>}
        >
          <div
            id={id}
            ref={ref}
            role="button"
            tabIndex={0}
            className={classes.select}
            aria-disabled={isDisabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            data-testid={dataTestId}
            onClick={handleSelectClick}
            onFocus={handleSelectFocus}
            onKeyDown={handleOnKeyDown}
            onBlur={handleSelectBlur}
          >
            {/* PLACEHOLDER AND SELECTED OPTION TEXT */}
            <div className={classes.placeholder}>{selectedOption?.label ?? placeholder}</div>

            <div className={classes.endContainer}>
              {/* LOADING SPINNER */}
              {isLoading && <Spinner size={SpinnerSize.xs} variant={SpinnerVariant.primary} />}

              {/* CHEVRON ICON */}
              <Icon
                className="h-5 w-5"
                icon={isFocused ? IconCatalog.chevronUp : IconCatalog.chevronDown}
              />
            </div>
          </div>
        </Popover>
        {assistiveText && <span className={classes.assistiveText}>{assistiveText}</span>}
      </div>
    );
  },
);
