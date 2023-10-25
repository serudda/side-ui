/* ---------------------  IMPORTS  ---------------------- */
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@common';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  Icon,
  IconCatalog,
  IconStyle,
  Image,
} from '@components';

/* ---------------------  END: IMPORTS  ---------------------- */

//

/* -----------------------  VARIANTS  ------------------------ */

export enum ModalSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

const Sizes: Record<ModalSize, string> = {
  [ModalSize.sm]: 'max-w-md',
  [ModalSize.base]: 'max-w-lg',
  [ModalSize.lg]: 'max-w-xl',
  [ModalSize.xl]: 'max-w-2xl',
};

/* --------------------  END: VARIANTS  ---------------------- */

//

/* -------------------------  PROPS  ------------------------- */
export interface ModalProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Title for modal header
   */
  title?: string;

  /**
   * Subtitle for modal header
   */
  subtitle?: string;

  /**
   * The callback to get notified when the modal was closed
   */
  onClose?: () => void;
}
/* ----------------------  END: PROPS  ----------------------- */

//

/* -----------------  COMPONENT DEFINITION  ------------------ */

/**
 * Modals focus the user’s attention exclusively on
 * one task or piece of information via a window that sits on top of the page content.
 */
export const Modal = ({ title, subtitle, onClose }: ModalProps) => {
  /* Classes */
  const classes = {
    container: '',
    content: '',
  };

  /* Init states & hooks */
  const [value, setValue] = useState();
  useEffect(() => {
    console.log('value', value);
  }, [value]);

  /* Handlers */
  const handleCloseBtnClick = () => onClose && onClose();

  /* Renders */
  return <div className={classes.container}></div>;
};

/* ---------------  END: COMPONENT DEFINITION  ---------------- */
