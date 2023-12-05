import React from 'react';
import { Button, ButtonSize, ButtonVariant, Icon, IconCatalog, IconStyle } from '@components';
import cn from 'classnames';

export interface ModalHeaderProps {
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
  action?: React.ReactNode;

  /**
   * Callback to execute when clicking on the close button
   */
  onClose?: () => void;
}

/**
 * `ModalHeader` represents the header section of a modal
 */
export const ModalHeader = ({ title, action, hasCloseBtn, onClose }: ModalHeaderProps) => {
  const classes = {
    header: cn('flex items-center flex-shrink-0 justify-between pt-6 pb-4 px-6'),
  };

  const handleCloseBtnClick = () => onClose?.();

  return (
    <div className={classes.header}>
      {title && (
        <h2 className="line-clamp-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
      )}

      <div className="ml-auto flex items-center">
        {action}
        {hasCloseBtn && (
          <Button
            variant={ButtonVariant.ghost}
            size={ButtonSize.xs}
            onClick={handleCloseBtnClick}
            isOnlyIcon
          >
            <Icon className="h-5 w-5" icon={IconCatalog.xMark} iconStyle={IconStyle.regular} />
          </Button>
        )}
      </div>
    </div>
  );
};
