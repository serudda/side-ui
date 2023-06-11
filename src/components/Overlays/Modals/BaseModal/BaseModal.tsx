import { ReactNode, useEffect } from 'react';
import cn from 'classnames';
import { Key } from '~/common';
import { Button, ButtonSize, ButtonVariant, IconCatalog } from '~/components';
import { useBodyClass, useKeyPress } from '~/hooks';

export enum ModalSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

const Sizes: Record<ModalSize, string> = {
  [ModalSize.sm]: 'max-w-md',
  [ModalSize.base]: 'max-w-lg',
  [ModalSize.lg]: 'max-w-xl',
  [ModalSize.xl]: 'max-w-2xl',
};

export type HeaderType = {
  /**
   * Title for modal header
   */
  title?: string;

  /**
   * Render close button
   */
  hasCloseBtn?: boolean;

  /**
   * Set an extra action on the modal header
   */
  action?: ReactNode;
};

export interface BaseModalProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Define the modal header
   */
  header?: HeaderType;

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
      'transform-none transition-transform h-full my-7 mx-auto relative w-auto pointer-events-none',
      Sizes[size],
    ),
    content: cn(
      'bg-slate-950',
      'rounded-2xl',
      'max-h-full overflow-hidden',
      'relative flex flex-col w-full pointer-events-auto bg-clip-padding outline-0',
    ),
    header: cn('flex items-center flex-shrink-0 justify-between', {
      'py-4 pl-6 pr-5': header,
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
    <div className={classes.container} style={{ height: 'calc(100% - 3.5rem)' }}>
      <div className={classes.content}>
        {/* HEADER */}
        {header && (
          <div className={classes.header}>
            {header.title && (
              <h2 className="font-semi-bold line-clamp-3 text-xl text-neutral-50">
                {header.title}
              </h2>
            )}

            <div className="ml-auto flex items-center">
              {header.action && header.action}
              {header.hasCloseBtn && (
                <Button
                  startIcon={IconCatalog.xMark}
                  variant={ButtonVariant.ghost}
                  size={ButtonSize.sm}
                  onClick={handleCancelBtnClick}
                />
              )}
            </div>
          </div>
        )}

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
