import { ReactNode } from 'react';
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
  const classes = cn(
    className,
    'border-2 border-transparent bg-slate-700 p-1 outline-none transition-all first:rounded-l last:rounded-r hover:bg-slate-300 focus:border-slate-400',
    {
      'bg-slate-950': selectedValue === value,
    },
  );

  const handleClick = () => onChange(value);

  return (
    <button {...props} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
};

export const ToggleButtonGroup = { Root: ToggleGroupProvider, Button: ToggleButton };
