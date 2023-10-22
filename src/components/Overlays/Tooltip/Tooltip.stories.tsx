import { Button, ButtonSize, ButtonVariant } from '@components';
import { Tooltip, TooltipPlacement } from './Tooltip';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    text: 'Enter a description',
    placement: TooltipPlacement.top,
    delayShow: 0,
    delayHide: 0,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="mt-32 flex items-center justify-center">
        <Tooltip {...args}>
          <Button size={ButtonSize.sm} variant={ButtonVariant.primary}>
            Get early Access
          </Button>
        </Tooltip>
      </div>
    );
  },
};
