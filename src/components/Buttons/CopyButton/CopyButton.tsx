import { Children, ReactElement, cloneElement, type ReactNode } from 'react';
import { Tooltip } from '~/components';
import { useCopyToClipboard } from '~/hooks';

export interface CopyButtonProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * Ref to the target element
   */
  target: string | React.RefObject<HTMLElement>;

  /**
   * Whether show the tooltip or not
   */
  withTooltip: boolean;

  /**
   * Elements to display inside the Navbar.
   */
  children?: ReactNode;

  /**
   * Function to be called when the button is clicked
   */
  onClick?: (event: React.MouseEvent) => void;
}

export const CopyButton = ({
  className,
  withTooltip = false,
  target,
  children,
  onClick,
}: CopyButtonProps) => {
  const { copy, copied, setCopied } = useCopyToClipboard();
  const copyText = copied ? 'Copied' : 'Copy';

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) onClick(event);
    copy(target);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const child = Children.only(children) as ReactElement; //[1]

  /* Append handle to the trigger component */
  const element = cloneElement(child, {
    className: child.props.className ? child.props.className : className,
    onClick: handleClick,
  });

  return <>{withTooltip ? <Tooltip text={copyText}>{element}</Tooltip> : element}</>;
};
