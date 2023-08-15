import type { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchSize, SwitchVariant } from './Switch';

const meta = {
  title: 'UI Components/Controls/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    id: '1',
    name: 'Switch',
    isDisabled: false,
    label: 'Label text',
    size: SwitchSize.sm,
    variant: SwitchVariant.primary,
    onChange: (checked: boolean) => console.log('value: ', checked),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="flex items-center gap-10">
        <Switch {...args} size={SwitchSize.xs} id="xs" />
        <Switch {...args} size={SwitchSize.sm} id="sm" />
        <Switch {...args} size={SwitchSize.base} id="base" />
      </div>
    );
  },
};
