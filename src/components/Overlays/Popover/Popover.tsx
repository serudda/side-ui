import {
  Children,
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type RefObject,
} from 'react';
import cn from 'classnames';
import { usePopper } from 'react-popper';
import { hasProp } from '~/common';
import { Portal } from '~/components';
import { useOnClickOutside } from '~/hooks';

export enum PopoverPlacement {
  topStart = 'top-start',
  top = 'top',
  topEnd = 'top-end',
  leftStart = 'left-start',
  left = 'left',
  leftEnd = 'left-end',
  rightStart = 'right-start',
  right = 'right',
  rightEnd = 'right-end',
  bottomStart = 'bottom-start',
  bottom = 'bottom',
  bottomEnd = 'bottom-end',
}

export interface PopoverProps {
  /**
   * The content displayed inside the popover.
   */
  content: ReactNode;

  /**
   * When true, the popover is manually shown.
   */
  isOpen?: boolean;

  /**
   * Whether has a decorative arrow.
   */
  hasArrow?: boolean;

  /**
   * The position (relative to the target) at which the popover should appear.
   */
  placement?: PopoverPlacement;

  /**
   * Specify an optional className to be added to the menu component
   */
  menuClassName?: string;

  /**
   * Whether the float menu has the same trigger's width
   */
  menuFullWidth?: boolean;

  /**
   * Specify the role of the popover in order to improve accessibility
   */
  role?: string;

  /**
   * Elements to display inside the Navbar.
   */
  children?: ReactNode;

  /**
   * Function called when the use clicks outside the popover container.
   */
  onClickOutside?: () => void;
}

/**
 * The Popover component displays floating informative and actionable content in relation to a target.
 * Popovers appear either at the top, bottom, left, or right of their target.
 */
export const Popover = ({
  content,
  isOpen = false,
  hasArrow = false,
  placement = PopoverPlacement.bottomStart,
  onClickOutside,
  role = 'menu',
  menuClassName,
  menuFullWidth = false,
  children,
}: PopoverProps) => {
  const classes = {
    menu: cn(menuClassName, 'shadow-lg bg-slate-900 rounded-lg z-50'),
    menuContent: cn(
      'bg-slate-900 rounded-lg',
      'border border-slate-800',
      'text-base-white text-caption text-center',
      'transition duration-100 ease-out',
    ),
    arrowContainer: cn('absolute w-2 h-2 bg-slate-900 invisible', {
      '-bottom-1': placement.includes(PopoverPlacement.top),
      '-top-1': placement.includes(PopoverPlacement.bottom),
      '-right-0': placement.includes(PopoverPlacement.left),
      '-left-2': placement.includes(PopoverPlacement.right),
    }),
    arrow: cn('w-2 h-2', 'bg-slate-900 absolute', 'transform rotate-45', 'visible'),
  };

  const [popoverElement, setPopoverElement] = useState<RefObject<HTMLElement> | HTMLElement | null>(
    null,
  );

  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const refTriggerNode = useRef<HTMLSpanElement>(null);

  const [open, setOpen] = useState<boolean>(isOpen);

  useOnClickOutside(
    {
      current: popoverElement,
    } as RefObject<HTMLElement>,
    () => {
      console.log('onClickOutside: ', onClickOutside);
      if (onClickOutside) return onClickOutside();
      setOpen(false);
    },
  );

  /* Popper config */
  const { styles, attributes, forceUpdate } = usePopper(
    refTriggerNode.current,
    popoverElement as HTMLElement,
    {
      placement,
      modifiers: [
        { name: 'offset', options: { offset: [0, 8] } },
        { name: 'arrow', options: { element: arrowElement } },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top', 'right'],
          },
        },
      ],
    },
  );

  const menuStyles = menuFullWidth
    ? {
        ...styles.popper,
        minWidth: refTriggerNode.current?.scrollWidth,
        maxWidth: refTriggerNode.current?.scrollWidth,
      }
    : { ...styles.popper };

  useEffect(() => {
    setOpen(isOpen);
    let timeout: ReturnType<typeof setTimeout>;
    if (forceUpdate) timeout = setTimeout(() => forceUpdate());
    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (forceUpdate) timeout = setTimeout(() => forceUpdate());
    return () => clearTimeout(timeout);
  }, [open]);

  const handleTriggerClick = (): void => setOpen(!open);

  const child = Children.only(children) as ReactElement; //[1]

  /* Append handle to the trigger component */
  const element = hasProp(child.props, 'onClick')
    ? cloneElement(child, { ref: refTriggerNode })
    : cloneElement(child, { ref: refTriggerNode, onClick: handleTriggerClick });

  return (
    <>
      {element}
      <Portal>
        <div
          role={role}
          className={classes.menu}
          ref={setPopoverElement}
          style={menuStyles}
          {...attributes.popper}
        >
          {open && (
            <div className={classes.menuContent}>
              {content}
              {hasArrow && (
                <div
                  id="arrow"
                  ref={setArrowElement}
                  style={styles.arrow}
                  data-popper-arrow
                  className={classes.arrowContainer}
                >
                  <span className={classes.arrow}></span>
                </div>
              )}
            </div>
          )}
        </div>
      </Portal>
    </>
  );
};
