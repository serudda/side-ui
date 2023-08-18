import { ComponentPropsWithoutRef, ReactNode } from 'react';
import cn from 'classnames';
import { ButtonProps } from '@/components';
import { ToggleGroupProvider, useToggleGroup } from '@/contexts';

export interface ToggleGroupButtonProps extends ButtonProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * The value of the button
   */
  value: string;

  /**
   * Elements to display inside the button.
   */
  children: ReactNode;
}

const ToggleButton = ({ children, value, className, ...props }: ToggleGroupButtonProps) => {
  const { value: selectedValue, onChange } = useToggleGroup();

  return (
    <button
      {...props}
      className={cn(
        className,
        'border-2 border-transparent bg-slate-700 p-1 outline-none transition-all first:rounded-l last:rounded-r hover:bg-slate-300 focus:border-slate-400',
        selectedValue === value && 'bg-slate-950',
      )}
      onClick={(e) => onChange(value)}
    >
      {children}
    </button>
  );
};

export const ToggleButtonGroup = { Root: ToggleGroupProvider, Button: ToggleButton };
