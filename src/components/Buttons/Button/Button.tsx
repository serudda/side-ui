import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import cn from 'classnames';
import {
  Icon,
  IconStyle,
  Spinner,
  SpinnerSize,
  SpinnerVariant,
  type IconCatalog,
} from '@/components';

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
}

const SizesWithoutIcon: Record<ButtonSize, string> = {
  [ButtonSize.xs]: 'py-1.5 px-3 text-sm font-semibold h-8',
  [ButtonSize.sm]: 'py-2 px-4 text-sm font-semibold h-10',
  [ButtonSize.base]: 'py-3 px-5 text-base font-medium h-12',
};

const SizesOnlyIcon: Record<ButtonSize, string> = {
  [ButtonSize.xs]: 'p-2',
  [ButtonSize.sm]: 'p-2',
  [ButtonSize.base]: 'p-3',
};

const SizesWithStartIcon: Record<ButtonSize, string> = {
  [ButtonSize.xs]: 'px-3 py-2 text-xs font-semibold',
  [ButtonSize.sm]: 'px-4 py-2 text-sm font-semibold',
  [ButtonSize.base]: 'px-4 py-3 text-base font-semibold',
};

const SizesWithEndIcon: Record<ButtonSize, string> = {
  [ButtonSize.xs]: 'px-3 py-2 text-xs font-semibold',
  [ButtonSize.sm]: 'px-4 py-2 text-sm font-semibold',
  [ButtonSize.base]: 'px-4 py-3 text-base font-semibold',
};

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  ghost = 'ghost',
  destructive = 'destructive',
  discord = 'discord',
  twitter = 'twitter',
}

const Variants: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]: 'bg-primary-500 enabled:hover:bg-primary-200 text-black',
  [ButtonVariant.secondary]: 'bg-secondary-500 enabled:hover:bg-secondary-400 text-white',
  [ButtonVariant.tertiary]:
    'bg-slate-900 enabled:hover:bg-slate-800 border border-slate-700 text-white',
  [ButtonVariant.ghost]: 'bg-transparent enabled:hover:bg-slate-800 text-white',
  [ButtonVariant.destructive]: 'bg-rose-600 enabled:hover:bg-rose-500 text-white',
  [ButtonVariant.discord]: 'bg-[#5865f2]/60 enabled:hover:bg-[#5865f2]/80 text-white',
  [ButtonVariant.twitter]: 'bg-[#1d9bf0] enabled:hover:bg-[#1a8cd8] text-white',
};

const InvertVariants: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]:
    'bg-transparent border border-primary-900 hover:bg-primary-950 text-primary-100',
  [ButtonVariant.secondary]:
    'bg-transparent border border-secondary-700 hover:bg-secondary-950 text-secondary-100',
  [ButtonVariant.tertiary]: 'bg-transparent border border-slate-700 hover:bg-slate-800 text-white',
  [ButtonVariant.ghost]: 'bg-transparent hover:bg-slate-800 text-white',
  [ButtonVariant.destructive]:
    'bg-transparent border border-rose-900 hover:bg-rose-950 text-rose-300',
  [ButtonVariant.discord]: 'bg-[#5865f2]/60 hover:bg-[#5865f2]/80 text-white',
  [ButtonVariant.twitter]: 'bg-[#1d9bf0]/60 hover:bg-[#1d9bf0]/80 text-white',
};

enum ButtonIconSize {
  xs = 'w-4 h-4',
  sm = 'w-5 h-5',
  base = 'w-6 h-6',
}

export enum HtmlType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Changes the size of the button, giving it more or less padding
   */
  size?: ButtonSize;

  /**
   * The shape of the component. It determines the importance in the hierarchy, for example, the contained button commands the most attention
   */
  variant?: ButtonVariant;

  /**
   * If set to true, the button's color will be inverted.
   */
  invert?: boolean;

  /**
   * The icon to display on the left side.
   */
  startIcon?: IconCatalog;

  /**
   * The icon to display on the right side.
   */
  endIcon?: IconCatalog;

  /**
   * Disables the button, disallowing user interaction.
   */
  isDisabled?: boolean;

  /**
   * If set to true, the button will display a loading effect.
   */
  isLoading?: boolean;

  /**
   * The text to display when the button is in a loading state.
   */
  loadingText?: string;

  /**
   * Extends the button to 100% width.
   */
  isFullWidth?: boolean;

  /**
   * HTML type attribute of the button.
   */
  htmlType?: HtmlType;

  /**
   * Elements to display inside the Navbar.
   */
  children?: ReactNode;

  /**
   * The style for displaying icons in the button. It determines the appearance of the icons, including stroke thickness and fill.
   */
  iconStyle?: IconStyle;
}

/**
 * Buttons are used to initialize an action.
 * Button labels express what action will occur when the user interacts with it.
 */
export const Button = ({
  children,
  size = ButtonSize.base,
  startIcon,
  endIcon,
  isDisabled = false,
  isLoading = false,
  loadingText = 'Loading',
  isFullWidth = false,
  invert = false,
  variant = ButtonVariant.primary,
  htmlType = HtmlType.button,
  className,
  onClick,
  iconStyle = IconStyle.light,
  ...restOfProps
}: ButtonProps) => {
  const setSizes = () => {
    if (startIcon && children) return SizesWithStartIcon[size];
    if (endIcon && children) return SizesWithEndIcon[size];
    if ((startIcon || endIcon) && !children) return SizesOnlyIcon[size];

    return SizesWithoutIcon[size];
  };

  const classes = {
    button: cn(
      className,
      'flex items-center justify-center relative overflow-hidden min-w-fit',
      'text-center whitespace-nowrap',
      'transition duration-100 ease-out',
      'rounded-md disabled:opacity-50 disabled:cursor-default',
      setSizes(),
      invert ? InvertVariants[variant] : Variants[variant],
      {
        'w-full': isFullWidth,
        'cursor-default opacity-30': isDisabled,
      },
    ),
    startIcon: cn(ButtonIconSize[size], {
      'mr-1.5': children && size === ButtonSize.xs,
      'mr-2': children && (size === ButtonSize.sm || size === ButtonSize.base),
    }),
    endIcon: cn(ButtonIconSize[size], {
      'ml-1.5': children && size === ButtonSize.xs,
      'ml-2': children && (size === ButtonSize.sm || size === ButtonSize.base),
    }),
    loading: cn(
      'absolute left-0 top-0 opacity-30',
      'w-full h-full',
      'flex items-center justify-center',
      'after:content-[""] after:absolute after:h-full after:w-full after:animate-translation-x',
      'before:content-[""] before:absolute before:h-full before:w-full before:animate-translation-x',
      {
        'after:bg-primary-700 before:bg-primary-700': variant === ButtonVariant.primary,
        'after:bg-neutral-500 before:bg-neutral-500':
          variant === ButtonVariant.secondary ||
          variant === ButtonVariant.tertiary ||
          variant === ButtonVariant.ghost,
        'after:bg-error-700 before:bg-error-700': variant === ButtonVariant.destructive,
      },
    ),
  };

  /* Render JSX */
  return (
    <button
      className={classes.button}
      type={htmlType}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      {...restOfProps}
    >
      {startIcon && <Icon className={classes.startIcon} icon={startIcon} iconStyle={iconStyle} />}
      <span>{!isLoading ? children : loadingText}</span>
      {isLoading && (
        <Spinner className="ml-2" variant={SpinnerVariant.neutral} size={SpinnerSize.xs} />
      )}
      {endIcon && <Icon className={classes.endIcon} icon={endIcon} iconStyle={iconStyle} />}
    </button>
  );
};
