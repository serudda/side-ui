import React, { useEffect } from 'react';
import { Key } from '@common';
import { useBodyClass, useKeyPress } from '@hooks';
import cn from 'classnames';
import { ModalBody } from './ModalBody/ModalBody';
import { ModalFooter } from './ModalFooter/ModalFooter';
import { ModalHeader } from './ModalHeaders';

export const PRIMARY_ACTION_BTN_ID = 'primary-action-btn';

export enum ModalSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  fullScreen = 'fullScreen',
}

const Sizes: Record<ModalSize, string> = {
  [ModalSize.sm]: 'max-w-md',
  [ModalSize.base]: 'max-w-lg',
  [ModalSize.lg]: 'max-w-xl',
  [ModalSize.xl]: 'max-w-2xl',
  [ModalSize.fullScreen]: 'max-w-full',
};

export enum ModalBgColor {
  transparent = 'transparent',
  slate = 'slate',
  black = 'black',
}

const BgColors: Record<ModalBgColor, string> = {
  [ModalBgColor.transparent]: 'bg-transparent',
  [ModalBgColor.slate]: 'bg-slate-950',
  [ModalBgColor.black]: 'bg-black',
};

export interface ModalContentProps {
  /**
   * Specify an optional id to be added to the primary action button.
   */
  primaryActionBtnId?: string;

  /**
   * Specify an optional className to be added to the body section.
   */
  className?: string;

  /**
   * Changes the size of the modal, giving it more or less padding
   */
  size?: ModalSize;

  /**
   * The children of the modal content.
   */
  children?: React.ReactNode;

  /**
   * The callback to get notified when the user press the ESC key
   */
  onEscKeyPress?: () => void;
}

/**
 * `ModalContent` is the main container where the different sections of the modal must be used
 */
export const ModalContent = ({
  primaryActionBtnId = PRIMARY_ACTION_BTN_ID,
  className,
  size = ModalSize.base,
  children,
  onEscKeyPress,
}: ModalContentProps) => {
  const isFullScreen = size === ModalSize.fullScreen;
  useBodyClass('opened-modal');

  const classes = {
    content: cn(
      'bg-neutral-900',
      'shadow-xl rounded-2xl',
      'overflow-hidden',
      'relative flex flex-col w-full pointer-events-auto bg-clip-padding outline-0',
      className,
      Sizes[size],
      {
        'max-h-[90%]': !isFullScreen,
      },
    ),
  };

  const pressedEsc = useKeyPress(Key.Escape);
  const pressedEnter = useKeyPress(Key.Enter);

  useEffect(() => {
    if (pressedEnter) {
      const btn = document.querySelector(`[data-id="${primaryActionBtnId}"]`);
      if (btn) (btn as HTMLButtonElement).click();
    }
  }, [pressedEnter]);

  useEffect(() => {
    if (pressedEsc) handleCancelBtnClick();
  }, [pressedEsc]);

  const handleCancelBtnClick = () => {
    if (onEscKeyPress) onEscKeyPress();
  };

  return <div className={classes.content}>{children}</div>;
};

ModalContent.Header = ModalHeader;
ModalContent.Body = ModalBody;
ModalContent.Footer = ModalFooter;
