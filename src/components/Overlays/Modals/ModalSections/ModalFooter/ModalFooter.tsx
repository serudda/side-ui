import { ReactNode, isValidElement } from 'react';
import { cn } from '@common';

export interface ModalFooterProps {
  /**
   * The children of the modal footer.
   */
  children?: ReactNode;

  /**
   * Specify an optional className to be added to the body section.
   */
  className?: string;
}

/**
 * `ModalFooter` represents the footer section of a modal
 */
export const ModalFooter = ({ children, className }: ModalFooterProps) => {
  const isValidChildren = isValidElement(children);

  const classes = {
    footer: cn(
      'flex flex-wrap flex-shrink-0 items-center w-full',
      {
        'p-6': isValidChildren,
      },
      className,
    ),
  };

  if (!isValidChildren) return null;

  return <div className={classes.footer}>{children}</div>;
};
