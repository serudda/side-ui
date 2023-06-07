import type { Meta, StoryObj } from '@storybook/react';
import { Tag, TagVariant } from './Tag';

const meta = {
  title: 'UI Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
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
        <Tag {...args} variant={TagVariant.neutral}>
          <span>BADGE</span>
        </Tag>
        <Tag {...args} variant={TagVariant.primary}>
          <span>BADGE</span>
        </Tag>
        <Tag {...args} variant={TagVariant.secondary}>
          <span>BADGE</span>
        </Tag>
        <Tag {...args} variant={TagVariant.success}>
          <span>BADGE</span>
        </Tag>
        <Tag {...args} variant={TagVariant.warning}>
          <span>BADGE</span>
        </Tag>
        <Tag {...args} variant={TagVariant.error}>
          <span>BADGE</span>
        </Tag>
      </div>
    );
  },
};
