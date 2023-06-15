import type { Meta, StoryObj } from '@storybook/react';
import { Button, Popover } from '~/components';

const meta = {
  title: 'UI Components/Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    content: (
      <div className="flex flex-col gap-4 p-4">
        <div className="text-neutral-50">This is a Popover</div>
        <div className="text-neutral-50">It can contain any content</div>
      </div>
    ),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="relative mt-32 flex items-center justify-center">
        <Popover {...args}>
          <Button>This is a Button</Button>
        </Popover>
      </div>
    );
  },
};
