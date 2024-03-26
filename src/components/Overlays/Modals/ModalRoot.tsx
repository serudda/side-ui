import { ReactNode, isValidElement } from 'react';
import { cn } from '@common';
import ReactDOM from 'react-dom';
import { ModalSize } from './ModalSections';

interface ModalRootProps {
  /**
   * Elements to display inside the ModalRoot.
   */
  children: ReactNode;
}

/**
 * `ModalRoot` represents the main root where modals will be rendered.
 */
export const ModalRoot = ({ children }: ModalRootProps) => {
  const classes = {
    root: cn(
      'fixed top-0 left-0 bottom-0 right-0 z-30 overflow-x-hidden overflow-y-auto outline-0 transition-opacity',
    ),
    container: cn('flex min-h-full justify-center items-center'),
    overlay: cn(
      'fixed inset-0 bg-slate-300/75 dark:bg-slate-800/75 transition-opacity backdrop-blur-sm',
    ),
  };

  const getModalStyles = () => {
    // it's needed to get the 70% of the screen height
    const BASE_MODAL_SIZE_GAP = '70svh';
    let defaultStyles;

    // if the modal content is not full screen
    if (children && isValidElement(children)) {
      console.log('children: ', children);
      if (children.props.size !== ModalSize.fullScreen) {
        defaultStyles = {
          height: BASE_MODAL_SIZE_GAP,
          padding: '1rem',
        };
      }
    }

    return defaultStyles;
  };

  const modalRoot = (
    <div className={classes.root} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* OVERLAY */}
      <div className={classes.overlay} aria-hidden="true"></div>

      {/* MODAL CONTAINER */}
      <div className={classes.container} style={getModalStyles()}>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalRoot, document.body);
};
