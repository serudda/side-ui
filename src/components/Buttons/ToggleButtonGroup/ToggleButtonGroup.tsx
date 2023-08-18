import { ReactNode, useState } from 'react';
import cn from 'classnames';
import { Button, ButtonProps, ButtonSize, ButtonVariant } from '@/components';
import { ToggleGroupProvider, useToggleGroup } from '@/contexts';

enum ToggleButtonPosition {
  left = 'left',
  middle = 'middle',
  right = 'right',
}

export interface ToggleButtonProps extends ButtonProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  position?: ToggleButtonPosition;

  /**
   * The value of the button
   */
  value: string;

  /**
   * Elements to display inside the button.
   */
  children: ReactNode;
}

const ToggleButton = ({
  children,
  value,
  position = ToggleButtonPosition.middle,
  className,
  ...props
}: ToggleButtonProps) => {
  const { value: selectedValue, onChange } = useToggleGroup();
  const classes = cn(className, {
    'rounded-l-md': position === ToggleButtonPosition.left,
    '-ml-px': position === ToggleButtonPosition.middle,
    '-ml-px rounded-r-md': position === ToggleButtonPosition.right,
  });

  const handleClick = () => onChange(value);

  return (
    <Button
      {...props}
      className={classes}
      onClick={handleClick}
      isActive={selectedValue === value}
      isSquare
    >
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
   * Extends the buttons to 100% width.
   */
  isFullWidth?: boolean;

  /**
   * The value of the buttons.
   */
  variant?: ButtonVariant;

  /**
   * The size of the buttons.
   */
  size?: ButtonSize;
}

export const ToggleButtonGroup = ({
  variant = ButtonVariant.primary,
  size = ButtonSize.sm,
  isFullWidth = false,
  className,
}: ToggleButtonGroupProps) => {
  const classes = {
    container: cn(className, 'isolate inline-flex', {
      'w-full': isFullWidth,
    }),
  };
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
      <ToggleButton
        variant={variant}
        value="subtle"
        size={size}
        position={ToggleButtonPosition.left}
        isFullWidth={isFullWidth}
      >
        Subtle
      </ToggleButton>
      <ToggleButton
        variant={variant}
        value="moderate"
        size={size}
        position={ToggleButtonPosition.middle}
        isFullWidth={isFullWidth}
      >
        Moderate
      </ToggleButton>
      <ToggleButton
        variant={variant}
        value="wild"
        size={size}
        position={ToggleButtonPosition.right}
        isFullWidth={isFullWidth}
      >
        Wild
      </ToggleButton>
    </ToggleGroupProvider>
  );
};
