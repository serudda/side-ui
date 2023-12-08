import React from 'react';
import { cn } from '@common';
import { Button, ButtonSize, ButtonVariant, Icon, IconCatalog, IconStyle } from '@components';

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
    header: cn(
      'flex items-center flex-shrink-0 justify-between',
      'border-b border-slate-200 dark:border-slate-900',
      'p-4 pl-5',
    ),
  };

  const handleCloseBtnClick = () => onClose?.();

  return (
    <div className={classes.header}>
      {title && (
        <div className="line-clamp-3 text-base font-semibold text-slate-500 dark:text-slate-500">
          {title}
        </div>
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
