import { useEffect } from 'react';
import { cn } from '@common';
import { useToast } from '@contexts';
import { Icon, IconCatalog } from '../../Icon/Icon';

export type ActionType = {
  /**
   * Set the button action label
   */
  label?: string;

  /**
   * Provide a handler that is called when the action button was clicked.
   */
  onActionClick: () => void;
};

export enum ToastVariant {
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

const Variants: Record<ToastVariant, string> = {
  [ToastVariant.neutral]: 'bg-slate-900 border border-slate-800',
  [ToastVariant.success]: 'bg-slate-900 ring-1 ring-inset ring-green-400/30',
  [ToastVariant.warning]: 'bg-slate-900 ring-1 ring-inset ring-yellow-400/30',
  [ToastVariant.error]: 'bg-slate-900 ring-1 ring-inset ring-red-400/30',
};

const IconVariants: Record<ToastVariant, IconCatalog> = {
  [ToastVariant.neutral]: IconCatalog.bolt,
  [ToastVariant.success]: IconCatalog.checkCircle,
  [ToastVariant.warning]: IconCatalog.informationCircle,
  [ToastVariant.error]: IconCatalog.bugAnt,
};

const IconVariantColors: Record<ToastVariant, string> = {
  [ToastVariant.neutral]: 'text-slate-500',
  [ToastVariant.success]: 'text-green-500',
  [ToastVariant.warning]: 'text-yellow-500',
  [ToastVariant.error]: 'text-rose-500',
};

export interface ToastProps {
  /**
   * Set an idntifier when you have more than one Toast on the screen.
   */
  id?: string | number;

  /**
   * Descriptive label to be read to screenreaders
   */
  ariaLabel?: string;

  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Set a title
   */
  title: string;

  /**
   * Set a description
   */
  description?: string | JSX.Element;

  /**
   * The shape of the component.
   */
  variant?: ToastVariant;

  /**
   * Whether the Tag has a contextual icon
   */
  hasIcon?: boolean;

  /**
   * Set an extra action
   */
  action?: ActionType;

  /**
   * Whether the Toast has a close button
   */
  hasCloseBtn?: boolean;

  /**
   * Set a time to auto delete Toast
   */
  dismissInterval?: number;

  /**
   * Provide a handler that is called when the close button was clicked.
   */
  onClose?: () => void;
}

/**
 * The Toast component is a non-intrusive, time-limited message or notification element used to
 * display brief information to users in software applications or websites.
 */
export const Toast = ({
  id,
  ariaLabel,
  className,
  title,
  description,
  variant = ToastVariant.neutral,
  hasIcon = true,
  action,
  hasCloseBtn = true,
  dismissInterval,
  onClose,
}: ToastProps) => {
  const classes = {
    container: cn(
      'p-4 flex gap-5 rounded-lg w-96 min-h-12',
      Variants[variant],
      {
        'items-start': description,
        'items-center': !description,
      },
      className,
    ),
    icon: cn('w-5 h-5 shrink-0 grow-0', IconVariantColors[variant]),
    content: cn('flex items-start flex-col gap-1.5'),
  };

  const { deleteToast } = useToast();

  useEffect(() => {
    if (!dismissInterval) return;

    const timer = setTimeout(() => {
      if (id) deleteToast(id);
    }, dismissInterval);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseBtnClick = () => {
    if (!hasCloseBtn) return;
    if (id) deleteToast(id);
    if (onClose) onClose();
  };

  const handleActionBtnClick = () => {
    if (!action) return;

    const { onActionClick } = action;
    if (onActionClick) onActionClick();
  };

  /* Render JSX */
  return (
    <div
      className={classes.container}
      role="alert"
      aria-label={ariaLabel}
      aria-labelledby={`title-${id}`}
      aria-describedby={`description-${id}`}
      tabIndex={0}
    >
      {/* ICON */}
      {hasIcon && <Icon className={classes.icon} icon={IconVariants[variant]} />}

      {/* CONTENT */}
      <div className={classes.content}>
        {/* TITLE */}
        <div id={`title-${id}`} className="font-semibold leading-none text-neutral-50">
          {title}
        </div>

        {/* DESCRIPTION */}
        {description && (
          <div id={`description-${id}`} className="text-sm text-slate-400">
            {description}
          </div>
        )}

        {/* ACTION */}
        {action && (
          <button
            className="text-sm font-medium text-secondary-300 hover:text-secondary-200"
            onClick={handleActionBtnClick}
          >
            {action.label}
          </button>
        )}
      </div>

      <div className="ml-auto flex items-center space-x-3">
        {/* CLOSE BTN */}
        {hasCloseBtn && (
          <button className="text-slate-400 hover:text-slate-50" onClick={handleCloseBtnClick}>
            <Icon icon={IconCatalog.xMark} className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};
