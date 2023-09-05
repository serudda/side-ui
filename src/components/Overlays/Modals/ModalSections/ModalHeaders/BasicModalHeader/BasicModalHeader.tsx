import { ReactNode } from 'react';
import { cn } from '@/common';
import { Button, ButtonSize, ButtonVariant, Icon, IconCatalog, IconStyle } from '@/components';

export interface BasicModalHeaderProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

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

  /**
   * The callback to get notified when the modal was closed
   */
  onClose?: () => void;
}

/**
 * This component is used to render a basic modal header
 */
export const BasicModalHeader = ({
  className,
  title,
  action,
  hasCloseBtn,
  onClose,
}: BasicModalHeaderProps) => {
  const classes = {
    header: cn('flex items-center flex-shrink-0 justify-between', 'py-4 pl-6 pr-5', className),
  };

  const handleCloseBtnClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className={classes.header}>
      {title && <h2 className="font-semi-bold line-clamp-3 text-xl text-neutral-50">{title}</h2>}

      <div className="flex items-center">
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
