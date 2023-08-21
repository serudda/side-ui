import { ReactNode, useEffect } from 'react';
import cn from 'classnames';
import { Key } from '@/common';
import { useBodyClass, useKeyPress } from '@/hooks';

export enum ModalSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  fullScreen = 'fullScreen',
}

const Sizes: Record<ModalSize, string> = {
  [ModalSize.sm]: 'max-w-md',
  [ModalSize.base]: 'max-w-lg',
  [ModalSize.lg]: 'max-w-xl',
  [ModalSize.xl]: 'max-w-2xl',
  [ModalSize.fullScreen]: 'max-w-full',
};

export enum ModalBgColor {
  transparent = 'transparent',
  slate = 'slate',
  black = 'black',
}

const BgColors: Record<ModalBgColor, string> = {
  [ModalBgColor.transparent]: 'bg-transparent',
  [ModalBgColor.slate]: 'bg-slate-950',
  [ModalBgColor.black]: 'bg-black',
};

export interface BaseModalProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Changes the size of the modal, giving it more or less padding
   */
  size?: ModalSize;

  /**
   * Changes the background color of the modal
   */
  bgColor?: ModalBgColor;

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
  size = ModalSize.base,
  bgColor = ModalBgColor.slate,
  header,
  body,
  footer,
  onClose,
}: BaseModalProps) => {
  const classes = {
    container: cn(
      className,
      'transform-none transition-transform relative w-auto pointer-events-none',
      Sizes[size],
      {
        'my-7 mx-auto h-full': size !== ModalSize.fullScreen,
        'h-screen': size === ModalSize.fullScreen,
      },
    ),
    content: cn(
      'overflow-hidden',
      'relative flex flex-col w-full pointer-events-auto bg-clip-padding outline-0',
      BgColors[bgColor],
      {
        'rounded-2xl max-h-full': size !== ModalSize.fullScreen,
        'h-full': size === ModalSize.fullScreen,
      },
    ),
    header: cn({
      'p-3': !header,
    }),
    body: cn('relative', {
      'flex-auto overflow-y-auto px-6 scrollbar-w-2 scrollbar-thumb-rounded-lg scrollbar-thumb-slate-800 scrollbar-track-slate-900':
        size !== ModalSize.fullScreen,
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
        <div className={classes.body}>{body}</div>

        {/* FOOTER */}
        <div className={classes.footer}>{footer}</div>
      </div>
    </div>
  );
};
