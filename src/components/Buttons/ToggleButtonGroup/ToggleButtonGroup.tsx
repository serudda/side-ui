import { ReactNode } from 'react';
import cn from 'classnames';
import { Button, type ButtonProps } from '@/components';
import { useToggleGroup } from '@/contexts';

export enum ToggleButtonGroupPosition {
  left = 'left',
  middle = 'middle',
  right = 'right',
}

export interface ToggleButtonGroupProps extends Omit<ButtonProps, ''> {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * The position of the button on the group.
   */
  position?: ToggleButtonGroupPosition;

  /**
   * The value of the button.
   */
  value: string;

  /**
   * Elements to display inside the button.
   */
  children: ReactNode;
}

export const ToggleButtonGroup = ({
  children,
  value,
  position = ToggleButtonGroupPosition.middle,
  className,
  ...restOfProps
}: ToggleButtonGroupProps) => {
  const { value: selectedValue, onChange } = useToggleGroup();
  const classes = cn(className, {
    'rounded-l-md': position === ToggleButtonGroupPosition.left,
    '-ml-px': position === ToggleButtonGroupPosition.middle,
    '-ml-px rounded-r-md': position === ToggleButtonGroupPosition.right,
  });

  const handleClick = () => onChange(value);

  return (
    <Button
      {...restOfProps}
      className={classes}
      onClick={handleClick}
      isActive={selectedValue === value}
      isSquare
    >
      {children}
    </Button>
  );
};

/**
 * @reference https://www.joshuawootonn.com/react-toggle-group-component
 */
