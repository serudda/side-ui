import { ReactNode } from 'react';
import { cn } from '@common';
import { ModalContent, ModalSize } from '../ModalSections';
import { ModalBodyProps } from '../ModalSections/ModalBody/ModalBody';
import { ModalFooterProps } from '../ModalSections/ModalFooter/ModalFooter';
import { ModalHeaderProps } from '../ModalSections/ModalHeaders';

export interface BaseModalProps
  extends Omit<ModalBodyProps, 'children'>,
    Omit<ModalFooterProps, 'children'> {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Specify an optional className to be added to the body section.
   */
  bodyClassName?: string;

  /**
   * Specify an optional id to be added to the primary action button.
   */
  primaryActionBtnId?: string;

  /**
   * Define the modal header
   */
  header?: Omit<ModalHeaderProps, 'onCloseBtnClick'>;

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
   * Indicates if the footer must be shown, default to `true`
   */
  showFooter?: boolean;

  /**
   * The callback to get notified when the modal was closed
   */
  onClose?: () => void;
}

/**
 * Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content.
 * @author Sergio Ruiz<sergioruizdavila@gmail.com>
 * Created at 2022-08-02
 */
export const BaseModal = ({
  className,
  header,
  body,
  footer,
  size = ModalSize.base,
  onClose,
  bodyClassName,
  showFooter = true,
  isBodyScrollable = true,
  primaryActionBtnId,
}: BaseModalProps) => {
  const classes = cn(className);

  const handleCancelBtnClick = () => {
    if (onClose) onClose();
  };

  /* Render JSX */
  return (
    <ModalContent
      primaryActionBtnId={primaryActionBtnId}
      className={classes}
      size={size}
      onEscKeyPress={handleCancelBtnClick}
    >
      {/* HEADER */}
      {header && <ModalContent.Header {...header} onClose={handleCancelBtnClick} />}

      {/* BODY */}
      <ModalContent.Body className={bodyClassName} isBodyScrollable={isBodyScrollable}>
        {body}
      </ModalContent.Body>

      {/* FOOTER */}
      {showFooter && <ModalContent.Footer>{footer}</ModalContent.Footer>}
    </ModalContent>
  );
};
