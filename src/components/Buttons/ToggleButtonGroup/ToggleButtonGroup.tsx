import { ReactNode, useState } from 'react';
import cn from 'classnames';
import { Button, ButtonProps, ButtonSize, ButtonVariant } from '@/components';
import { ToggleGroupProvider, useToggleGroup } from '@/contexts';

export interface ToggleButtonProps extends ButtonProps {
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

const ToggleButton = ({ children, value, className, ...props }: ToggleButtonProps) => {
  const { value: selectedValue, onChange } = useToggleGroup();
  const classes = cn(className, {
    'bg-slate-950': selectedValue === value,
  });

  const handleClick = () => onChange(value);

  return (
    <Button {...props} className={classes} onClick={handleClick}>
      {children}
    </Button>
  );
};

export interface ToggleButtonGroupProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * The value of the buttons
   */
  variant?: ButtonVariant;

  /**
   * The size of the buttons
   */
  size?: ButtonSize;
}

export const ToggleButtonGroup = ({
  variant = ButtonVariant.primary,
  size = ButtonSize.sm,
  className,
}: ToggleButtonGroupProps) => {
  const classes = { container: cn(className, 'isolate inline-flex') };
  const [favoriteFruit, setFavoriteFruit] = useState<string | null>('banana');

  const handleChange = (value: string) => {
    console.log(value);
    setFavoriteFruit(value);
  };

  return (
    <ToggleGroupProvider
      value={favoriteFruit}
      onChange={handleChange}
      className={classes.container}
      aria-label="What is your favorite fruit?"
    >
      <ToggleButton variant={variant} value="subtle" size={size} isSquare>
        Subtle
      </ToggleButton>
      <ToggleButton variant={variant} value="moderate" size={size} isSquare>
        Moderate
      </ToggleButton>
      <ToggleButton variant={variant} value="wild" size={size} isSquare>
        Wild
      </ToggleButton>
    </ToggleGroupProvider>
  );
};
