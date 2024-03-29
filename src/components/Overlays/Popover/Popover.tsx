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
import { cn, hasProp } from '@common';
import { Portal } from '@components';
import { useOnClickOutside } from '@hooks';
import { usePopper } from 'react-popper';

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
   * Specify an optional array of ref objects to be added to the whitelist.
   */
  whitelistContainers?: Array<RefObject<HTMLElement>>;

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
  whitelistContainers = [],
  children,
}: PopoverProps) => {
  const classes = {
    menu: cn('shadow-lg rounded-lg z-50 bg-white dark:bg-slate-900', menuClassName),
    menuContent: cn(
      'dark:bg-slate-900 bg-white rounded-lg',
      'border border-slate-300 dark:border-slate-800',
      'dark:text-white text-slate-950 text-caption text-center',
      'transition duration-100 ease-out',
    ),
    arrowContainer: cn('absolute w-2 h-2 dark:bg-slate-900 bg-white invisible', {
      '-bottom-1': placement.includes(PopoverPlacement.top),
      '-top-1': placement.includes(PopoverPlacement.bottom),
      '-right-0': placement.includes(PopoverPlacement.left),
      '-left-2': placement.includes(PopoverPlacement.right),
    }),
    arrow: cn('w-2 h-2', 'dark:bg-slate-900 bg-white absolute', 'transform rotate-45', 'visible'),
  };

  const [popoverElement, setPopoverElement] = useState<RefObject<HTMLElement> | HTMLElement | null>(
    null,
  );

  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const refTriggerNode = useRef<HTMLSpanElement>(null);

  const [open, setOpen] = useState<boolean>(isOpen);

  const handleClickOutside = () => {
    if (onClickOutside) return onClickOutside();
    setOpen(false);
  };

  useOnClickOutside(
    [...whitelistContainers, { current: popoverElement } as RefObject<HTMLElement>],
    () => handleClickOutside(),
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

  const handleForceUpdate = () => {
    let timeout: ReturnType<typeof setTimeout>;
    if (forceUpdate) timeout = setTimeout(() => forceUpdate());
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    setOpen(isOpen);
    handleForceUpdate();
  }, [isOpen]);

  useEffect(() => {
    handleForceUpdate();
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

/**
 * [1]
 * References:
 * https://css-tricks.com/using-react-portals-to-render-children-outside-the-dom-hierarchy/
 * https://codepen.io/davidgilbertson/pen/ooXVyw
 */
