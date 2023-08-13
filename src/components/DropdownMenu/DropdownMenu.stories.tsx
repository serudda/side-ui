import type { Meta, StoryObj } from '@storybook/react';
import { Button, DropdownMenu, Tag, TagVariant } from '@/components';

const meta = {
  title: 'UI Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  args: {
    trigger: (
      <div className="inline-flex">
        <Button>Trigger</Button>
      </div>
    ),
    menu: (
      <DropdownMenu.Menu>
        <DropdownMenu.Option onClick={() => console.log('clicked: 1')}>
          <span className="text-sm text-slate-50">Feature request</span>
        </DropdownMenu.Option>
        <DropdownMenu.Option onClick={() => console.log('clicked: 2')}>
          <span className="flex w-full items-center">
            <span className="text-sm text-slate-50">What's new</span>
            <Tag className="ml-auto" variant={TagVariant.error} />
          </span>
        </DropdownMenu.Option>
        <DropdownMenu.Option onClick={() => console.log('clicked: 3')}>
          <span className="text-sm text-slate-50">Report issue</span>
        </DropdownMenu.Option>
        <hr className="my-1.5 border border-slate-800" />
        <DropdownMenu.Option onClick={() => console.log('clicked: 4')} isDisabled>
          <span className="text-sm font-semibold text-slate-50">Twitter @serudda</span>
        </DropdownMenu.Option>
      </DropdownMenu.Menu>
    ),
    onClickOutside: undefined,
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <DropdownMenu {...args} />;
  },
};
