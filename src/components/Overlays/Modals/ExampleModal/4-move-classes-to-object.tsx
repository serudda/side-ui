import { ReactNode } from 'react';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  Icon,
  IconCatalog,
  IconStyle,
  Image,
} from '@components';

/* --------------------  VARIANTS  ---------------------- */

export enum ModalSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export enum ModalBgColor {
  transparent = 'transparent',
  slate = 'slate',
  black = 'black',
}

/* --------------------  END: VARIANTS  ---------------------- */

//

/* -------------------------  PROPS  ------------------------- */
export interface ModalProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Title for modal header
   */
  title?: string;

  /**
   * Subtitle for modal header
   */
  subtitle?: string;

  /**
   * Changes the size of the modal, giving it more or less padding
   */
  size?: ModalSize;

  /**
   * Changes the background color of the modal
   */
  bgColor?: ModalBgColor;

  /**
   * Elements to display inside the Modal.
   */
  body: ReactNode;

  /**
   * Elements to display inside the Footer.
   */
  footer?: ReactNode;

  /**
   * Render close button
   */
  hasCloseBtn?: boolean;

  /**
   * The callback to get notified when the modal was closed
   */
  onClose?: () => void;
}
/* ----------------------  END: PROPS  ----------------------- */

//

/* -----------------  COMPONENT DEFINITION  ------------------ */

/**
 * Modals focus the user’s attention exclusively on
 * one task or piece of information via a window that sits on top of the page content.
 */
export const Modal = ({
  title,
  subtitle,
  hasCloseBtn = true,
  body,
  footer,
  onClose,
}: ModalProps) => {
  /* Classes */
  const classes = {
    container:
      'pointer-events-none relative mx-auto my-7 h-full w-auto max-w-md transform-none transition-transform',
    content:
      'pointer-events-auto relative flex max-h-full w-full flex-col overflow-hidden rounded-2xl bg-slate-900 bg-clip-padding outline-0',
    header: {
      container: 'relative p-5 pt-20',
      title: 'font-semi-bold mb-1 line-clamp-3 text-lg text-slate-50',
      subtitle: 'font-regular line-clamp-3 text-sm text-slate-400',
      closeBtn: 'absolute right-4 top-4 text-neutral-300',
    },
    body: 'relative flex-auto px-6',
    footer: 'flex w-full flex-shrink-0 flex-wrap items-center p-6',
  };

  /* Handlers */
  const handleCloseBtnClick = () => onClose && onClose();

  /* Renders */
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Image src="assets/images/pattern-icon.svg" className="absolute left-0 top-0 z-0" />

        {/* HEADER */}
        <div className="relative p-5 pt-20">
          <h2 className="font-semi-bold mb-1 line-clamp-3 text-lg text-slate-50">{title}</h2>
          <h3 className="font-regular line-clamp-3 text-sm text-slate-400">{subtitle}</h3>

          {hasCloseBtn && (
            <Button
              className="absolute right-4 top-4 text-neutral-300"
              variant={ButtonVariant.ghost}
              size={ButtonSize.xs}
              onClick={handleCloseBtnClick}
              isOnlyIcon
            >
              <Icon className="h-6 w-6" icon={IconCatalog.xMark} iconStyle={IconStyle.regular} />
            </Button>
          )}
        </div>

        {/* BODY */}
        <div className={classes.body}>{body}</div>

        {/* FOOTER */}
        <div className={classes.footer}>{footer}</div>
      </div>
    </div>
  );
};

/* ---------------  END: COMPONENT DEFINITION  ---------------- */
