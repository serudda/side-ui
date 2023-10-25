import { ReactNode } from 'react';
import { cn } from '@common';
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

const Sizes: Record<ModalSize, string> = {
  // key, value
  [ModalSize.sm]: 'max-w-md',
  [ModalSize.base]: 'max-w-lg',
  [ModalSize.lg]: 'max-w-xl',
  [ModalSize.xl]: 'max-w-2xl',
};

export enum ModalBgColor {
  transparent = 'transparent',
  slate = 'slate',
  black = 'black',
}

const BgColors: Record<ModalBgColor, string> = {
  [ModalBgColor.transparent]: 'bg-transparent',
  [ModalBgColor.slate]: 'bg-slate-900',
  [ModalBgColor.black]: 'bg-black',
};

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
  className,
  title,
  subtitle,
  hasCloseBtn = true,
  body,
  footer,
  onClose,
}: ModalProps) => {
  /* Classes */
  const classes = {
    container: cn(
      'relative',
      'h-full w-auto max-w-md',
      'mx-auto my-7',
      'pointer-events-none transform-none transition-transform',
      className,
    ),
    content: cn(
      'relative flex flex-col',
      'max-h-full w-full',
      'bg-slate-900 bg-clip-padding',
      'pointer-events-auto rounded-2xl outline-0 overflow-hidden',
    ),
    pattern: cn('absolute left-0 top-0 z-0'),
    header: {
      container: cn('relative p-5 pt-20'),
      title: cn('mb-1', 'font-semi-bold line-clamp-3 text-lg text-slate-50'),
      subtitle: cn('font-regular line-clamp-3 text-sm text-slate-400'),
      closeBtn: cn('absolute right-4 top-4', 'text-neutral-300'),
    },
    body: cn('relative flex-auto px-6'),
    footer: cn('flex flex-shrink-0 flex-wrap items-center', 'w-full p-6'),
  };

  /* Handlers */
  const handleCloseBtnClick = () => onClose && onClose();

  /* Renders */
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Image src="assets/images/pattern-icon.svg" className={classes.pattern} />

        {/* HEADER */}
        <div className={classes.header.container}>
          <h2 className={classes.header.title}>{title}</h2>
          <h3 className={classes.header.subtitle}>{subtitle}</h3>

          {hasCloseBtn && (
            <Button
              className={classes.header.closeBtn}
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
