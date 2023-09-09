import { Children, ReactElement, cloneElement, type ReactNode } from 'react';
import { cn } from '@/common';
import { Tooltip, TooltipSize } from '@/components';
import { useCopyToClipboard } from '@/hooks';

export interface CopyButtonProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * Specify an optional className to be added to the tooltip.
   */
  tooltipClassName?: string;

  /**
   * Ref to the target element
   */
  target: string | React.RefObject<HTMLElement>;

  /**
   * Whether show the tooltip or not
   */
  withTooltip?: boolean;

  /**
   * The content of the button
   */
  children?: ReactNode;

  /**
   * Function to be called when the button is clicked
   */
  onClick?: (event: React.MouseEvent) => void;
}

export const CopyButton = ({
  className,
  tooltipClassName,
  withTooltip = true,
  target,
  children,
  onClick,
}: CopyButtonProps) => {
  const classes = {
    tooltip: cn(tooltipClassName),
  };
  const { copy, copied, setCopied } = useCopyToClipboard();
  const copyText = copied ? 'Copied' : 'Copy';

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) onClick(event);
    copy(target);
  };

  const handleMouseLeave = () => setCopied(false);

  const child = Children.only(children) as ReactElement; //[1]

  /* Append handle to the trigger component */
  const element = cloneElement(child, {
    className: child.props.className ? child.props.className : className,
    onClick: handleClick,
    onMouseLeave: handleMouseLeave,
  });

  return (
    <>
      {withTooltip ? (
        <Tooltip text={copyText} size={TooltipSize.sm} className={classes.tooltip}>
          {element}
        </Tooltip>
      ) : (
        element
      )}
    </>
  );
};
