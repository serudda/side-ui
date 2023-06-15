import type { Meta, StoryObj } from '@storybook/react';
import { Button, DropdownMenu, Icon, IconCatalog } from '~/components';

const meta = {
  title: 'UI Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  args: {
    trigger: (
      <div className="e-inline-flex">
        <Button>Trigger</Button>
      </div>
    ),
    menu: (
      <DropdownMenu.Menu>
        <DropdownMenu.Option onClick={() => console.log('clicked: 1')}>
          <div className="flex items-center space-x-1">
            <Icon icon={IconCatalog.barsArrowDown} className="text-success-500" />
            <span>Normal</span>
          </div>
        </DropdownMenu.Option>
        <DropdownMenu.Option onClick={() => console.log('clicked: 2')}>
          <div className="flex items-center space-x-1">
            <Icon icon={IconCatalog.chevronDown} className="text-warning-500" />
            <span>Prioritario</span>
          </div>
        </DropdownMenu.Option>
        <DropdownMenu.Option onClick={() => console.log('clicked: 3')}>
          <div className="flex items-center space-x-1">
            <Icon icon={IconCatalog.documentCheck} className="text-error-500" />
            <span>Urgente</span>
          </div>
        </DropdownMenu.Option>
      </DropdownMenu.Menu>
    ),
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <DropdownMenu {...args} />;
  },
};
