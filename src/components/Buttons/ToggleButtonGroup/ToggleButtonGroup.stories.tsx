import { useState } from 'react';
import { cn } from '@common';
import { ButtonSize, ButtonVariant } from '@components';
import { ToggleGroupProvider } from '@contexts';
import { ToggleButtonGroup, ToggleButtonGroupPosition } from './ToggleButtonGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Buttons/ToggleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
  args: {
    variant: ButtonVariant.primary,
    size: ButtonSize.sm,
    isFullWidth: false,
  },
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// EXAMPLE
interface IntensityButtonGroupProps {
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

const IntensityButtonGroup = ({
  variant = ButtonVariant.primary,
  size = ButtonSize.sm,
  isFullWidth = false,
  className,
}: IntensityButtonGroupProps) => {
  const classes = {
    container: cn(
      'isolate inline-flex',
      {
        'w-full': isFullWidth,
      },
      className,
    ),
  };
  const [intensity, setIntensity] = useState<string | null>('subtle');

  const handleChange = (value: string) => {
    console.log(value);
    setIntensity(value);
  };

  return (
    <ToggleGroupProvider
      value={intensity}
      onChange={handleChange}
      className={classes.container}
      aria-label="Choose the intensity"
    >
      <ToggleButtonGroup
        variant={variant}
        value="subtle"
        size={size}
        position={ToggleButtonGroupPosition.left}
        isFullWidth={isFullWidth}
      >
        Subtle
      </ToggleButtonGroup>
      <ToggleButtonGroup
        variant={variant}
        value="moderate"
        size={size}
        position={ToggleButtonGroupPosition.middle}
        isFullWidth={isFullWidth}
      >
        Moderate
      </ToggleButtonGroup>
      <ToggleButtonGroup
        variant={variant}
        value="wild"
        size={size}
        position={ToggleButtonGroupPosition.right}
        isFullWidth={isFullWidth}
      >
        Wild
      </ToggleButtonGroup>
    </ToggleGroupProvider>
  );
};

export const Default: Story = {
  args: {
    value: 'subtle',
    variant: ButtonVariant.primary,
    size: ButtonSize.sm,
    isFullWidth: false,
    children: 'Subtle',
  },
  render: (args: IntensityButtonGroupProps) => {
    return <IntensityButtonGroup {...args} />;
  },
};
