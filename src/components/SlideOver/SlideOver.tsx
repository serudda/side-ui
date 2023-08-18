import { ReactNode } from 'react';
import { cn } from '@/common';
import { Button, ButtonSize, ButtonVariant, IconCatalog } from '@/components';

export enum SlideOverWidth {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

const SlideOverWidths: Record<SlideOverWidth, string> = {
  [SlideOverWidth.xs]: 'sm:min-w-80',
  [SlideOverWidth.sm]: 'sm:min-w-96',
  [SlideOverWidth.base]: 'sm:min-w-[28rem]',
  [SlideOverWidth.lg]: 'sm:min-w-128',
};

export interface SlideOverProps {
  /**
   * Additional CSS class for styling purposes.
   */
  className: string;

  /**
   * The content to be displayed inside the SlideOver.
   */
  children: ReactNode;

  /**
   * Function to handle opening/closing the SlideOver.
   */
  onClick: () => void;

  /**
   * Whether the SlideOver is initially open.
   */
  isOpen: boolean;

  /**
   * Whether the SlideOver is right-aligned (inverted).
   */
  isRightAligned?: boolean;

  /**
   * Whether the title should be right-aligned.
   */
  isTitleRightAligned?: boolean;

  /**
   * The title of the SlideOver.
   */
  title: string;

  /**
   * The width size of the SlideOver ('xs', 'sm', 'base', 'xl').
   */
  width?: SlideOverWidth;
}

/**
 * The `SlideOver` component presents a list of options that take immediate action or navigate the user outside of the current context. It functions as a collection of links, buttons, or content that can be displayed in a slide-out panel. It is useful for providing focused user interactions and attention in a non-intrusive manner.
 */
export const SlideOver = ({
  children,
  className,
  onClick,
  isOpen = true,
  isRightAligned = false,
  isTitleRightAligned = true,
  title = 'side-bar',
  width = SlideOverWidth.sm,
}: SlideOverProps) => {
  const classes = {
    container: cn(
      'absolute inset-0 sm:inset-y-0 transition-all p-4',
      'grid grid-rows-[0.05fr,1fr] gap-4 items-start',
      'bg-slate-950  border-slate-700 text-white',
      SlideOverWidths[width],

      // Control styles when Slider is on the left side (not right-aligned)
      {
        'left-0 -translate-x-0 border-r sm:right-auto': !isRightAligned && isOpen,
        'left-0 -translate-x-full opacity-0 sm:right-auto': !isRightAligned && !isOpen,
      },

      // Control styles when Slider is on the right side (right-aligned)
      {
        'right-0 translate-x-0 border-l sm:left-auto': isRightAligned && isOpen,
        'right-0 translate-x-full opacity-0 sm:left-auto': isRightAligned && !isOpen,
      },
      className,
    ),
    header: cn('flex items-center justify-between pt-2 items-start', {
      'flex-row-reverse': isTitleRightAligned,
    }),
  };

  return (
    <aside className={classes.container}>
      <header className={classes.header}>
        <span className="text-2xl font-semibold">{title}</span>

        <Button
          startIcon={IconCatalog.xMark}
          size={ButtonSize.xs}
          onClick={onClick}
          invert={true}
          variant={ButtonVariant.ghost}
        />
      </header>

      {/* Content */}
      {children}
    </aside>
  );
};
