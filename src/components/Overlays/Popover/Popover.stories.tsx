import { useRef } from 'react';
import { Button, Popover, PopoverProps } from '@components';
import type { Meta, StoryObj } from '@storybook/react';

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
          <span>
            <Button>This is a Button</Button>
          </span>
        </Popover>
      </div>
    );
  },
};

const WhiteListExample = (args: PopoverProps) => {
  const divNode = useRef(null);
  return (
    <>
      <div className="relative mt-32 flex items-center justify-center">
        <Popover content={args.content} whitelistContainers={[divNode]}>
          <span>
            <Button>This is a Button</Button>
          </span>
        </Popover>
      </div>
      <div className="absolute left-10 top-10" ref={divNode}>
        CLICKABLE ELEMENT
      </div>
    </>
  );
};

export const ExampleWhiteList: Story = {
  render: (args) => <WhiteListExample {...args} />,
};
