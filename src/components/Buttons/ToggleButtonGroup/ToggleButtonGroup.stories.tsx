import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSize, ButtonVariant } from '@/components';
import { ToggleButtonGroup } from './ToggleButtonGroup';

const meta = {
  title: 'UI Components/Buttons/ToggleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: ButtonSize.sm,
    variant: ButtonVariant.primary,
    isFullWidth: false,
  },
};
