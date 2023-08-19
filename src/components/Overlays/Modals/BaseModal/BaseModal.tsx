import { ReactNode, useEffect } from 'react';
import cn from 'classnames';
import { Key } from '@/common';
import { useBodyClass, useKeyPress } from '@/hooks';

export enum ModalSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  full = 'full',
}

const Sizes: Record<ModalSize, string> = {
  [ModalSize.sm]: 'max-w-md',
  [ModalSize.base]: 'max-w-lg',
  [ModalSize.lg]: 'max-w-xl',
  [ModalSize.xl]: 'max-w-2xl',
  [ModalSize.full]: 'max-w-full',
};

export interface BaseModalProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Define the modal header
   */
  header?: ReactNode;

  /**
   * Elements to display inside the Modal.
   */
  body: ReactNode;

  /**
   * Elements to display inside the Footer.
   */
  footer?: ReactNode;

  /**
   * Changes the size of the modal, giving it more or less padding
   */
  size?: ModalSize;

  /**
   * The callback to get notified when the modal was closed
   */
  onClose?: () => void;
}

/**
 * Modals focus the user’s attention exclusively on
 * one task or piece of information via a window that sits on top of the page content.
 */
export const BaseModal = ({
  className,
  header,
  body,
  footer,
  size = ModalSize.base,
  onClose,
}: BaseModalProps) => {
  const classes = {
    container: cn(
      className,
      'transform-none transition-transform relative w-auto pointer-events-none',
      Sizes[size],
      {
        'my-7 mx-auto h-full': size !== ModalSize.full,
        'h-screen': size === ModalSize.full,
      },
    ),
    content: cn(
      'bg-slate-950',
      'overflow-hidden',
      'relative flex flex-col w-full pointer-events-auto bg-clip-padding outline-0',
      {
        'rounded-2xl max-h-full': size !== ModalSize.full,
        'h-full': size === ModalSize.full,
      },
    ),
    header: cn({
      'p-3': !header,
    }),
    footer: cn('flex flex-wrap flex-shrink-0 items-center w-full', {
      'p-6': footer,
      'p-3': !footer,
    }),
  };

  useBodyClass('opened-modal');
  const pressedEsc = useKeyPress(Key.Escape);

  const handleCancelBtnClick = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    if (pressedEsc) handleCancelBtnClick();
  }, [pressedEsc]);

  /* Render JSX */
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {/* HEADER */}
        <div className={classes.header}>{header}</div>

        {/* BODY */}
        <div className="relative flex-auto overflow-y-auto px-6 scrollbar-w-2 scrollbar-thumb-rounded-lg scrollbar-thumb-slate-800 scrollbar-track-slate-900">
          {body}
        </div>

        {/* FOOTER */}
        <div className={classes.footer}>{footer}</div>
      </div>
    </div>
  );
};
