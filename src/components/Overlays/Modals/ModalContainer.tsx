import React from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';

interface ModalContainerProps {
  /**
   * Elements to display inside the ModalContainer.
   */
  children: React.ReactNode;
}

/**
 * `ModalContainer` represents the main container where modals will be rendered.
 */
export const ModalContainer = ({ children }: ModalContainerProps) => {
  const classes = {
    container: cn(
      'fixed top-0 left-0 bottom-0 right-0 z-30 overflow-x-hidden overflow-y-auto outline-0 transition-opacity',
    ),
    overlay: cn('fixed inset-0 bg-slate-800/75 transition-opacity backdrop-blur-sm'),
  };

  const modalContent = (
    <div
      className={classes.container}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* OVERLAY */}
      <div className={classes.overlay} aria-hidden="true"></div>
      {children}
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
