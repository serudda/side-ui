import type { Meta, StoryObj } from '@storybook/react';
import { Tag, TagVariant } from './Tag';

const meta = {
  title: 'UI Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
    variant: TagVariant.neutral,
    hasCloseBtn: false,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Tag {...args} variant={TagVariant.neutral} />
        <Tag {...args} variant={TagVariant.primary} />
        <Tag {...args} variant={TagVariant.secondary} />
        <Tag {...args} variant={TagVariant.success} />
        <Tag {...args} variant={TagVariant.warning} />
        <Tag {...args} variant={TagVariant.error} />
      </div>
    );
  },
};
