import { cn } from '@common';
import {
  BaseModal,
  BaseModalProps,
  Button,
  ButtonSize,
  ButtonVariant,
  ModalSize,
} from '@components';

export interface ConfirmationModalProps extends Omit<BaseModalProps, 'body' | 'size' | 'footer'> {
  /**
   * Set the confirm button label
   */
  confirmBtnLabel?: string;

  /**
   * Set the confirm button variant
   */
  confirmBtnVariant?: ButtonVariant;

  /**
   * Set the cancel button label
   */
  cancelBtnLabel?: string;

  /**
   * Set the confirmation description
   */
  description?: string;

  /**
   * The callback to get notified when the confirm button was clicked
   */
  onConfirm: () => void;
}

/**
 * Use this component in order to show a confirmation Dialog
 */
export const ConfirmationModal = ({
  description,
  className,
  confirmBtnLabel,
  confirmBtnVariant = ButtonVariant.primary,
  cancelBtnLabel,
  onClose,
  onConfirm,
  header,
  ...restProps
}: ConfirmationModalProps) => {
  const classes = cn(className);

  const handleCancelButtonClick = () => {
    if (onClose) onClose();
  };

  const handleConfirmButtonClick = () => {
    if (onConfirm) onConfirm();
  };

  return (
    <BaseModal
      className={classes}
      size={ModalSize.base}
      onClose={handleCancelButtonClick}
      header={header}
      body={
        <div className="flex flex-col gap-y-6">
          <p className="text-neutral-50">{description}</p>
        </div>
      }
      footer={
        <div className="ml-auto flex items-center space-x-4">
          <Button
            onClick={handleCancelButtonClick}
            size={ButtonSize.xs}
            variant={ButtonVariant.tertiary}
            invert
          >
            {cancelBtnLabel}
          </Button>
          <Button
            onClick={handleConfirmButtonClick}
            size={ButtonSize.xs}
            variant={confirmBtnVariant}
          >
            {confirmBtnLabel}
          </Button>
        </div>
      }
      {...restProps}
    ></BaseModal>
  );
};
