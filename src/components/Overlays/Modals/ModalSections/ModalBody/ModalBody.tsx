import React from 'react';
import { cn } from '@common';
import { Scrollable } from '@components';

export interface ModalBodyProps {
  /**
   * Elements to display inside the Modal.
   */
  children: React.ReactNode;

  /**
   * Specify an optional className to be added to the body section.
   */
  className?: string;

  /**
   * Flag to turn on/off the scrollable body content
   */
  isBodyScrollable?: boolean;
}

/**
 * `ModalBody` represents the body section of a modal
 */
export const ModalBody = ({ className, isBodyScrollable = true, children }: ModalBodyProps) => {
  const classes = {
    body: cn('relative flex-auto', className),
  };

  if (isBodyScrollable) return <Scrollable className={classes.body}>{children}</Scrollable>;

  return <div className={classes.body}>{children}</div>;
};
