import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle, ProgressCircleSize, ProgressCircleVariant } from './ProgressCircle';

const meta = {
  title: 'UI Components/Progress/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  args: {
    value: 60,
    maxValue: 280,
    size: ProgressCircleSize.lg,
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <ProgressCircle
          {...args}
          value={180}
          maxValue={280}
          variant={ProgressCircleVariant.primary}
        />
        <ProgressCircle
          {...args}
          value={200}
          maxValue={280}
          variant={ProgressCircleVariant.secondary}
        />
        <ProgressCircle
          {...args}
          value={220}
          maxValue={280}
          variant={ProgressCircleVariant.neutral}
        />
        <ProgressCircle
          {...args}
          value={240}
          maxValue={280}
          variant={ProgressCircleVariant.success}
        />
        <ProgressCircle
          {...args}
          value={260}
          maxValue={280}
          variant={ProgressCircleVariant.warning}
        />
        <ProgressCircle
          {...args}
          value={280}
          maxValue={280}
          variant={ProgressCircleVariant.primary}
        />
      </div>
    );
  },
};
