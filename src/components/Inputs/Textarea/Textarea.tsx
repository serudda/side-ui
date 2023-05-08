import React, {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { FormFieldState, Input } from '~/common';

export enum Resize {
  both = 'both',
  vertical = 'vertical',
  horizontal = 'horizontal',
  none = 'none',
}

export interface TextareaProps
  extends Input,
    Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'required'> {
  /**
   * Whether the Textarea allows autosize or not
   */
  hasAutoSize?: boolean;

  /**
   * Set the min height (px)
   */
  minHeight?: string;

  /**
   * Whether the Textarea is resizable or not
   */
  resize?: Resize;
}

/**
 * Similar to the Input component, enable the user to interact with and input long content and data.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      isDisabled = false,
      isRequired = false,
      isReadOnly = false,
      fieldState = FormFieldState.default,
      label,
      assistiveText,
      className,
      dataTestId,
      value = '',
      name,
      resize = Resize.vertical,
      hasAutoSize = false,
      minHeight = '72px',
      onChange,
      onBlur,
      onFocus,
      ...restOfProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const classes = {
      container: cn(className),
      textareaContainer: cn(
        'relative flex items-center overflow-hidden',
        'border',
        'rounded-md p-2 w-full',
        'text-slate-50',
        {
          'border-slate-700': fieldState === FormFieldState.default && !isDisabled,
          'border-rose-600': fieldState === FormFieldState.error && !isDisabled,
          'border-green-500': fieldState === FormFieldState.success && !isDisabled,
          'border-primary-800': fieldState === FormFieldState.default && isFocused,
          'bg-slate-900': !isDisabled,
          'bg-slate-900 border-transparent': isDisabled,
        },
      ),
      textarea: cn(
        'w-full',
        'transition duration-100 ease-out outline-none bg-transparent',
        'placeholder:text-slate-400 text-base',
        'disabled:cursor-not-allowed disabled:placeholder:text-slate-500',
        {
          'resize-none': resize === Resize.none,
          resize: resize === Resize.both,
          'resize-y': resize === Resize.vertical,
          'resize-x': resize === Resize.horizontal,
        },
      ),
      assistiveText: cn('mt-2 text-xs font-medium', {
        'text-slate-200': fieldState === FormFieldState.default,
        'text-rose-400': fieldState === FormFieldState.error,
        'text-green-400': fieldState === FormFieldState.success,
      }),
    };

    const myRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (!hasAutoSize) return;
      if (myRef && myRef.current) {
        myRef.current.style.height = minHeight;
        const scrollHeight = myRef.current.scrollHeight;
        myRef.current.style.height = scrollHeight + 'px';
      }
    }, [value]);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
      if (onChange) onChange(event);
    };

    const handleInputBlur = (event: FocusEvent<HTMLTextAreaElement>): void => {
      setIsFocused(false);
      if (onBlur) onBlur(event);
    };

    const handleInputFocus = (event: FocusEvent<HTMLTextAreaElement>): void => {
      setIsFocused(true);
      if (onFocus) onFocus(event);
    };

    // https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref
    const handleRef = (node: HTMLTextAreaElement | null) => {
      myRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as MutableRefObject<HTMLTextAreaElement | null>).current = node;
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
        <div className={classes.textareaContainer}>
          <textarea
            id={id}
            data-testid={dataTestId}
            ref={handleRef}
            name={name}
            className={classes.textarea}
            disabled={isDisabled}
            value={value}
            readOnly={isReadOnly}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            {...restOfProps}
          />
        </div>
        {assistiveText && <span className={classes.assistiveText}>{assistiveText}</span>}
      </div>
    );
  },
);
