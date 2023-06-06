import { useState } from 'react';
import cn from 'classnames';
import { Button, ButtonProps, Tooltip } from '~/components';

export interface CopyButtonProps extends ButtonProps {
  /**
   * Ref to the target element
   */
  target: string | React.RefObject<HTMLElement>;

  /**
   * Specify if the tooltip is active
   */
  isToolTipActive: boolean;

  /**
   * Specify if the text is active
   */
  isTextActive: boolean;
}

export const CopyButton = ({
  className,
  isToolTipActive = false,
  target,
  isTextActive = true,
  ...restOfProps
}: CopyButtonProps) => {
  const classes = cn(className);
  const [copied, setCopied] = useState(false);
  const tooltipText = copied ? 'Copied' : 'Copy';

  const getTextFromTarget = (
    target: string | React.RefObject<HTMLElement>,
  ): string | null | undefined => {
    if (typeof target === 'string') return target;
    return target.current?.textContent;
  };

  const handleClick = () => {
    const text = getTextFromTarget(target);
    if (!text) return;

    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  // Reset the copied state to false when mouse leaves the button
  const handleMouseLeave = () => setCopied(false);

  const renderButton = (
    <Button
      className={classes}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      {...restOfProps}
    >
      {isTextActive && tooltipText}
    </Button>
  );

  return (
    <>
      {isToolTipActive && <Tooltip text={tooltipText}>{renderButton}</Tooltip>}
      {!isToolTipActive && renderButton}
    </>
  );
};
