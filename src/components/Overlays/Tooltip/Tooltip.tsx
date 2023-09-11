import { Children, cloneElement, useRef, useState, type ReactElement, type ReactNode } from 'react';
import { cn } from '@common';
import { Portal } from '@components';
import { usePopper } from 'react-popper';

export enum TooltipPlacement {
  topLeft = 'top-start',
  top = 'top',
  topRight = 'top-end',
  leftTop = 'left-start',
  left = 'left',
  leftBottom = 'left-end',
  rightTop = 'right-start',
  right = 'right',
  rightBottom = 'right-end',
  bottomLeft = 'bottom-start',
  bottom = 'bottom',
  bottomRight = 'bottom-end',
}

export enum TooltipColor {
  black = 'black',
  white = 'white',
}

const Colors: Record<TooltipColor, string> = {
  [TooltipColor.black]: 'bg-slate-900 text-white border border-slate-800',
  [TooltipColor.white]: 'bg-slate-50 text-slate-900 border border-slate-800',
};

export enum TooltipSize {
  sm = 'sm',
  md = 'md',
}

export interface TooltipProps {
  /**
   * Descriptive text to be read to screenreaders
   */
  ariaLabel?: string;

  /**
   * Text to show within the Tooltip
   */
  text: string;

  /**
   * The color of the component. It supports those theme colors that makes sense for this component.
   */
  color?: TooltipColor;

  /**
   * Changes the size of the Tooltip.
   */
  size?: string;

  /**
   * Position of the Tooltip.
   */
  placement?: TooltipPlacement;

  /**
   * Whether the Tooltip has an arrow or not.
   */
  hasArrow?: boolean;

  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * Elements to display inside the Navbar.
   */
  children?: ReactNode;
}

export const Tooltip = ({
  ariaLabel,
  text,
  color = TooltipColor.black,
  placement = TooltipPlacement.top,
  size = TooltipSize.md,
  hasArrow = true,
  className,
  children,
}: TooltipProps) => {
  const classes = {
    container: cn('inline-flex relative w-fit-content select-none', 'shadow-md z-20', className),
    tooltip: cn('rounded-md', Colors[color], {
      'text-xs py-1.5 px-2.5': size === TooltipSize.sm,
      'text-sm py-2 px-4': size === TooltipSize.md,
    }),
    arrowContainer: cn('absolute w-2 h-2 bg-basic-black invisible', {
      '-bottom-1': placement.includes(TooltipPlacement.top),
      '-top-1': placement.includes(TooltipPlacement.bottom),
      '-right-1': placement.includes(TooltipPlacement.left),
      '-left-1': placement.includes(TooltipPlacement.right),
    }),
    arrow: cn('bg-basic-black absolute w-2 h-2 visible transform rotate-45'),
  };
  const [tooltipElement, setTooltipElement] = useState<HTMLSpanElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const refTriggerNode = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  /* Popper config */
  const { styles, attributes } = usePopper(refTriggerNode.current, tooltipElement, {
    placement,
    modifiers: [
      { name: 'offset', options: { offset: [0, 8] } },
      { name: 'arrow', options: { element: arrowElement } },
    ],
  });

  const handleMouseOver = (): void => setOpen(true);
  const handleMouseOut = (): void => setOpen(false);

  const child = Children.only(children) as ReactElement; //[1]

  /* Append handle to the trigger component */
  const element = cloneElement(child, {
    ref: refTriggerNode,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  });

  return (
    <>
      {element}
      <Portal>
        <div
          aria-label={ariaLabel}
          className={classes.container}
          ref={setTooltipElement}
          style={{ ...styles.popper }}
          {...attributes.popper}
        >
          {open && (
            <span className={classes.tooltip}>
              {text}
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
            </span>
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
