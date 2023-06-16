import { ReactNode, useState } from 'react';
import cn from 'classnames';
import { Icon, IconCatalog } from '~/components';

export enum TagVariant {
  primary = 'primary',
  secondary = 'secondary',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

const Variants: Record<TagVariant, string> = {
  [TagVariant.primary]: 'bg-primary-400/10 text-primary-500 ring-1 ring-inset ring-primary-400/30',
  [TagVariant.secondary]:
    'bg-secondary-400/10 text-secondary-200 ring-1 ring-inset ring-secondary-300/30',
  [TagVariant.neutral]: 'bg-slate-400/10 text-slate-300 ring-1 ring-inset ring-slate-400/20',
  [TagVariant.success]: 'bg-green-500/10 text-green-400 ring-1 ring-inset ring-green-500/20',
  [TagVariant.warning]: 'bg-yellow-400/10 text-yellow-500 ring-1 ring-inset ring-yellow-400/20',
  [TagVariant.error]: 'bg-red-400/10 text-red-400 ring-1 ring-inset ring-red-400/20',
};

const VariantsWithoutContent: Record<TagVariant, string> = {
  [TagVariant.primary]: 'bg-primary-400',
  [TagVariant.secondary]: 'bg-secondary-400',
  [TagVariant.neutral]: 'bg-slate-400',
  [TagVariant.success]: 'bg-green-500',
  [TagVariant.warning]: 'bg-yellow-400',
  [TagVariant.error]: 'bg-red-400',
};

export interface TagProps {
  /**
   * Set the Tag content
   */
  children?: ReactNode;

  /**
   * The shape of the component. It determines the importance in the hierarchy, for example, the contained button commands the most attention
   */
  variant?: TagVariant;

  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Whether the Tag has a close button
   */
  hasCloseBtn?: boolean;

  /**
   * Provide a handler that is called when the close button was clicked.
   */
  onCloseClick?: () => void;

  /**
   * Specify an optional test ID to use on e2e tests.
   */
  dataTestId?: string;
}

/**
 * The Tag component is useful to emphasize information to the user,
 * works best with single word values.
 */
export const Tag = ({
  children,
  variant = TagVariant.primary,
  hasCloseBtn = false,
  className,
  dataTestId,
  onCloseClick,
}: TagProps) => {
  const [tagContent, setTagContent] = useState('');

  const classes = {
    tag: cn(
      className,
      'items-center rounded-md',
      tagContent.length === 0 ? VariantsWithoutContent[variant] : Variants[variant],
      {
        'inline-flex py-1 px-2': tagContent.length > 1,
        'w-6 h-6 flex justify-center flex-grow-0 flex-shrink-0': tagContent.length === 1,
        'w-1.5 h-1.5': tagContent.length === 0,
      },
    ),
    text: cn('text-xs font-medium'),
    endIcon: cn('cursor-pointer', 'h-3.5 w-3.5', {
      'ml-1': hasCloseBtn,
    }),
  };

  const handleCloseBtnClick = () => {
    if (onCloseClick) onCloseClick();
  };

  const handleTagRef = (ref: HTMLDivElement | null) => setTagContent(ref?.textContent as string);

  /* Render JSX */
  return (
    <div ref={(ref) => handleTagRef(ref)} data-testid={dataTestId} className={classes.tag}>
      <span className={classes.text}>{children}</span>
      {hasCloseBtn && (
        <Icon className={classes.endIcon} icon={IconCatalog.xMark} onClick={handleCloseBtnClick} />
      )}
    </div>
  );
};
