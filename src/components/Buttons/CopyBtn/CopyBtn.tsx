import { useState } from 'react';
import cn from 'classnames';
import { Button, ButtonProps, ButtonSize, ButtonVariant, IconCatalog, Tooltip, HtmlType } from '~/components';

export interface CopyBtnProps extends ButtonProps {
  /**
   * Ref to the target element
   */
  target: React.RefObject<HTMLElement> ;
  /**
   * Specify if the tooltip is active
   */
  isToolTipActive: boolean;
   /**
   * Specify if the text is active
   */
  isTextActive: boolean;
}

export const CopyBtn = ({
  className,
  invert = false,
  isDisabled = false,
  isIconSolid = false,
  isToolTipActive = false,
  size = ButtonSize.base,
  startIcon = IconCatalog.clipboard,
  target,
  variant = ButtonVariant.ghost,
  isTextActive = true,
  ...restOfProps
}: CopyBtnProps) => {
  const classes = cn(className);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = target.current?.textContent;
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
    }
  };

  const handleMouseLeave = () => {
    /**
     * Reset the copied state to false when mouse leaves the button
     */
    setCopied(false);
  };
  const tooltipText = copied ? 'Copied' :  'Copy';

  const renderButton = (
    <Button
      invert={invert}
      className={classes}
      variant={variant}
      size={size}
      onClick={handleCopy}
      onMouseLeave={handleMouseLeave}
      disabled={isDisabled}
      isIconSolid={isIconSolid}
      startIcon={startIcon}
      htmlType={HtmlType.button}
      {...restOfProps}
    >
      {isTextActive && tooltipText}
    </Button>
  );

  return (
    <>
      {isToolTipActive && (
        <Tooltip text={tooltipText}>
          {renderButton}
        </Tooltip>
      )}
      {!isToolTipActive && renderButton}
    </>
  );

};
