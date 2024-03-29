import { useState } from 'react';
import { TailwindColorString, cn } from '@common';
import { Button, ButtonSize, ButtonVariant } from '@components';

export interface CollapsibleProps {
  /**
   * Additional class names to apply to the container
   */
  className?: string;

  /**
   * The maximum height of the collapsible section (px)
   */
  maxHeight?: number;

  /**
   * The height of the section to blur (percentage)
   */
  blurSectionHeight?: number;

  /**
   * The starting color of the gradient (light mode)
   */
  lightGradientToColor?: `from-${TailwindColorString}` | `from-[#${string}]`;

  /**
   * The starting color of the gradient (dark mode)
   */
  darkGradientToColor?: `dark:from-${TailwindColorString}` | `dark:from-[#${string}]`;

  /**
   * The content to display in the collapsible section
   */
  children?: React.ReactNode;

  /**
   * Whether the collapsible section is expanded
   */
  isExpandable?: boolean;

  /**
   * Whether the collapsible section has locked expand state
   */
  hasExpandLock?: boolean;

  /**
   * Callback fired when the collapsible section is collapsed
   */
  onCollapse?: () => void;

  /**
   * Callback fired when the collapsible section is expanded
   */
  onExpand?: () => void;
}

/**
 * This component is used to display a count avatar to show the number of remaining avatars
 */
export const Collapsible = ({
  className,
  maxHeight = 50,
  blurSectionHeight = 30,
  lightGradientToColor = 'from-white',
  darkGradientToColor = 'dark:from-slate-950',
  isExpandable = true,
  hasExpandLock = false,
  children,
  onCollapse,
  onExpand,
}: CollapsibleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = {
    container: cn(
      {
        'overflow-visible': isExpanded,
      },
      className,
    ),
    blurSection: cn(
      'absolute inset-x-0 bottom-0',
      'flex items-end justify-center',
      'bg-gradient-to-t to-transparent',
      lightGradientToColor,
      darkGradientToColor,
    ),
  };

  const handleClick = () => {
    if (hasExpandLock) {
      onExpand?.();
      return;
    }

    setIsExpanded((prev) => !prev);
    if (isExpanded) onCollapse?.();
    else onExpand?.();
  };

  return (
    <div className={classes.container}>
      <div
        className="relative overflow-y-hidden"
        style={{ maxHeight: isExpanded ? 'none' : `${maxHeight}px` }}
      >
        {/* COLLAPSABLE SECTION */}
        {children}

        {/* EXPAND/COLLAPSE BUTTON */}
        {!isExpanded && (
          <div
            className={classes.blurSection}
            style={{
              height: `${blurSectionHeight}%`,
            }}
          ></div>
        )}
      </div>
      {isExpandable && (
        <div className="flex items-center justify-center p-2">
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.xs}
            invert
            onClick={handleClick}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
        </div>
      )}
    </div>
  );
};
