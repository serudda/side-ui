import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, SpinnerSize, SpinnerVariant } from './Spinner';

const meta = {
  title: 'UI Components/Loaders/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: SpinnerSize.xs,
    variant: SpinnerVariant.primary,
  },
};
