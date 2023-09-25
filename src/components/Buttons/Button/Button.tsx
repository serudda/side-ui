import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@common';
import { Slot } from '@components';

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
}

const Sizes: Record<ButtonSize, string> = {
  [ButtonSize.xs]: 'py-1.5 px-3 text-sm font-semibold h-8',
  [ButtonSize.sm]: 'py-2 px-4 text-sm font-semibold h-10',
  [ButtonSize.base]: 'py-3 px-5 text-base font-semibold h-12',
};

const SizesOnlyIcon: Record<ButtonSize, string> = {
  [ButtonSize.xs]: 'w-8 h-8',
  [ButtonSize.sm]: 'w-10 h-10',
  [ButtonSize.base]: 'w-12 h-12',
};

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  ghost = 'ghost',
  destructive = 'destructive',
  discord = 'discord',
  twitter = 'twitter',
  special = 'special',
}

const Variants: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]: 'bg-primary-500 hover:bg-primary-600 text-white',
  [ButtonVariant.secondary]: 'bg-secondary-500 hover:bg-secondary-600 text-white',
  [ButtonVariant.tertiary]:
    'bg-transparent hover:dark:bg-slate-900 hover:bg-slate-100 border dark:border-slate-700 border-slate-300 dark:text-white text-black',
  [ButtonVariant.ghost]:
    'bg-transparent hover:dark:bg-slate-900 hover:bg-slate-100 dark:text-white text-black',
  [ButtonVariant.destructive]: 'bg-rose-600 hover:bg-rose-700 text-white',
  [ButtonVariant.discord]: 'bg-[#5865f2]/60 hover:bg-[#5865f2]/80 text-white',
  [ButtonVariant.twitter]: 'bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white',
  [ButtonVariant.special]:
    'bg-gradient-to-r dark:from-rose-800/90 dark:to-indigo-700/70 from-rose-800 to-indigo-700 hover:from-rose-900 hover:to-indigo-800 hover:dark:from-rose-800/60 hover:dark:to-secondary-600/40 text-white ring-1 ring-inset ring-indigo-700',
};

const ActiveVariant: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]: 'dark:bg-primary-700 hover:dark:bg-primary-700',
  [ButtonVariant.secondary]: 'dark:bg-secondary-700 hover:dark:bg-secondary-700',
  [ButtonVariant.tertiary]: 'dark:bg-secondary-950 hover:dark:bg-secondary-950',
  [ButtonVariant.ghost]: 'dark:bg-slate-900 hover:dark:bg-slate-900',
  [ButtonVariant.destructive]: 'dark:bg-rose-800 hover:dark:bg-rose-800',
  [ButtonVariant.discord]: 'dark:bg-[#5865f2]/60 hover:dark:bg-[#5865f2]/60',
  [ButtonVariant.twitter]: 'dark:bg-[#1a8cd8] hover:dark:bg-[#1a8cd8]',
  [ButtonVariant.special]:
    'bg-gradient-to-r dark:from-rose-800/90 dark:to-indigo-700/70 from-rose-800 to-indigo-700 hover:from-rose-900 hover:to-indigo-800 hover:dark:from-rose-800/60 hover:dark:to-secondary-600/40 text-white ring-1 ring-inset ring-indigo-700',
};

const InvertVariants: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]:
    'bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-slate-950 dark:border dark:border-primary-900 hover:dark:bg-primary-950 dark:text-primary-100',
  [ButtonVariant.secondary]:
    'bg-secondary-50 text-secondary-600 hover:bg-secondary-100 dark:bg-slate-950 dark:border dark:border-secondary-400 hover:dark:bg-secondary-950 dark:text-secondary-100',
  [ButtonVariant.tertiary]:
    'bg-slate-100 hover:bg-slate-200 border-slate-300 text-black dark:bg-transparent hover:dark:bg-slate-900 dark:border dark:border-slate-700 dark:text-white',
  [ButtonVariant.ghost]:
    'bg-transparent hover:dark:bg-slate-900 hover:bg-slate-100 dark:text-white text-black',
  [ButtonVariant.destructive]:
    'bg-rose-50 hover:bg-rose-100 text-rose-500 dark:bg-transparent dark:border dark:border-rose-900 hover:dark:bg-rose-950 dark:text-rose-300',
  [ButtonVariant.discord]: 'bg-[#5865f2]/60 hover:bg-[#5865f2]/80 text-white',
  [ButtonVariant.twitter]: 'bg-[#1d9bf0]/60 hover:bg-[#1d9bf0]/80 text-white',
  [ButtonVariant.special]:
    'bg-gradient-to-r dark:from-rose-800/90 dark:to-indigo-700/70 from-rose-800 to-indigo-700 hover:from-rose-900 hover:to-indigo-800 hover:dark:from-rose-800/60 hover:dark:to-secondary-600/40 text-white ring-1 ring-inset ring-indigo-700',
};

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
   * Disables the button, disallowing user interaction.
   */
  isDisabled?: boolean;

  /**
   * Whether the button is active or not.
   */
  isActive?: boolean;

  /**
   * Whether the button should be a square or not.
   */
  isSquare?: boolean;

  /**
   * Whether the button should only display an icon or not.
   */
  isOnlyIcon?: boolean;

  /**
   * Extends the button to 100% width.
   */
  isFullWidth?: boolean;

  /**
   * HTML type attribute of the button.
   */
  htmlType?: HtmlType;

  /**
   * Delegates the rendering of the button to its single child element.
   */
  asChild?: boolean;
}

/**
 * Buttons are used to initialize an action.
 * Button labels express what action will occur when the user interacts with it.
 */
export const Button = ({
  size = ButtonSize.base,
  isOnlyIcon = false,
  isActive = false,
  isDisabled = false,
  isSquare = false,
  isFullWidth = false,
  invert = false,
  variant = ButtonVariant.primary,
  htmlType = HtmlType.button,
  className,
  onClick,
  asChild = false,
  ...restOfProps
}: ButtonProps) => {
  const setSizes = () => {
    if (isOnlyIcon) return SizesOnlyIcon[size];

    return Sizes[size];
  };

  const classes = {
    button: cn(
      'flex items-center justify-center relative overflow-hidden',
      'text-center whitespace-nowrap',
      'transition duration-100 ease-out',
      'disabled:opacity-50 disabled:cursor-default',
      setSizes(),
      invert && !isActive ? InvertVariants[variant] : Variants[variant],
      isActive && ActiveVariant[variant],
      {
        'rounded-md': !isSquare,
        'w-full': isFullWidth,
        'cursor-default opacity-30': isDisabled,
      },
      className,
    ),
  };

  const Root = asChild ? Slot : 'button';

  /* Render JSX */
  return (
    <Root
      className={classes.button}
      type={htmlType}
      disabled={isDisabled}
      onClick={onClick}
      {...restOfProps}
    />
  );
};
