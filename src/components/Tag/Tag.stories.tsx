import type { Meta, StoryObj } from '@storybook/react';
import { Tag, TagSize, TagVariant } from './Tag';

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
      <div className="flex flex-col gap-5">
        <div className="inline-flex content-end items-end space-x-3">
          <Tag {...args} size={TagSize.xs} variant={TagVariant.neutral}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.xs} variant={TagVariant.primary}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.xs} variant={TagVariant.secondary}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.xs} variant={TagVariant.success}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.xs} variant={TagVariant.warning}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.xs} variant={TagVariant.error}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.xs} variant={TagVariant.special}>
            <span>Plus</span>
          </Tag>
        </div>

        <div className="inline-flex content-end items-end space-x-3">
          <Tag {...args} size={TagSize.sm} variant={TagVariant.neutral}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.sm} variant={TagVariant.primary}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.sm} variant={TagVariant.secondary}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.sm} variant={TagVariant.success}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.sm} variant={TagVariant.warning}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.sm} variant={TagVariant.error}>
            <span>BADGE</span>
          </Tag>
          <Tag {...args} size={TagSize.sm} variant={TagVariant.special}>
            <span>Plus</span>
          </Tag>
        </div>

        <div className="inline-flex content-end items-end space-x-3">
          <Tag {...args} variant={TagVariant.neutral} />
          <Tag {...args} variant={TagVariant.primary} />
          <Tag {...args} variant={TagVariant.secondary} />
          <Tag {...args} variant={TagVariant.success} />
          <Tag {...args} variant={TagVariant.warning} />
          <Tag {...args} variant={TagVariant.error} />
          <Tag {...args} variant={TagVariant.special} />
        </div>
      </div>
    );
  },
};
