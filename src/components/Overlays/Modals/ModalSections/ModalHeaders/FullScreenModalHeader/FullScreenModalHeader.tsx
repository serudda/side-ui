import { ReactNode } from 'react';
import cn from 'classnames';
import { Button, ButtonSize, ButtonVariant, Icon, IconCatalog, IconStyle } from '@/components';

export interface FullScreenModalHeaderProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Title for modal header
   */
  title?: string;

  /**
   * Render a go back button
   */
  hasGoBackBtn?: boolean;

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
 * This component is used to render a full screen modal header
 */
export const FullScreenModalHeader = ({
  className,
  title,
  action,
  hasGoBackBtn = true,
  onClose,
}: FullScreenModalHeaderProps) => {
  const classes = {
    header: cn('flex items-center z-10 border-b border-slate-800 bg-black', className),
    container: cn('flex items-center w-full justify-between'),
    list: cn('flex items-center gap-9 mr-4', 'items-center'),
    link: cn('text-slate-500 font-medium hover:text-slate-50 hidden md:block', 'transition-colors'),
  };

  const handleGoBackBtnClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className="flex items-center gap-3">
          {/* GO BACK BUTTON */}
          {hasGoBackBtn && (
            <div className="flex items-center border-r border-slate-800 p-2">
              <Button
                size={ButtonSize.base}
                variant={ButtonVariant.ghost}
                onClick={handleGoBackBtnClick}
                isOnlyIcon
              >
                <Icon
                  className="h-8 w-8"
                  icon={IconCatalog.arrowLeft}
                  iconStyle={IconStyle.regular}
                />
              </Button>
            </div>
          )}

          {/* TITLE */}
          {title && (
            <h2 className="line-clamp-3 px-2 text-2xl font-semibold text-slate-50">{title}</h2>
          )}
        </div>

        {action && (
          <nav className="text-sm">
            <ul className={classes.list}>
              <li className="flex items-center">{action}</li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
