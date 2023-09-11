import { cn } from '@common';
import { useToast } from '@contexts';
import { Toast } from './Toast';

export enum ToastPlacement {
  top = 'top',
  topStart = 'top-start',
  topEnd = 'top-end',
  bottom = 'bottom',
  bottomStart = 'bottom-start',
  bottomEnd = 'bottom-end',
}

const Placement: Record<ToastPlacement, string> = {
  [ToastPlacement.top]: 'top-5 left-1/2 -translate-x-1/2 transform',
  [ToastPlacement.topStart]: 'top-5 left-5',
  [ToastPlacement.topEnd]: 'top-5 right-5',
  [ToastPlacement.bottom]: 'bottom-5 left-1/2 -translate-x-1/2 transform',
  [ToastPlacement.bottomStart]: 'bottom-5 left-5',
  [ToastPlacement.bottomEnd]: 'bottom-5 right-5',
};

export interface ToastContainerProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * The position (relative to the target) at which the toast should appear.
   */
  placement?: ToastPlacement;
}

/**
 * The main container for all the Toasts in the app.
 */
export const ToastContainer = ({
  className,
  placement = ToastPlacement.top,
}: ToastContainerProps) => {
  const classes = cn('fixed z-40 space-y-4', Placement[placement], className);
  const { currentToasts } = useToast();

  if (currentToasts.length === 0) return null;

  const wrapperToast = currentToasts.map((toast) => (
    <div key={toast.id} className="flex w-full transform transition-all duration-300">
      <Toast {...toast} />
    </div>
  ));

  /* RENDER */
  return <div className={classes}>{wrapperToast}</div>;
};
