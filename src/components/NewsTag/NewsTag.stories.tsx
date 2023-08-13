import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconCatalog, IconStyle } from '..';
import { NewsTag, NewsTagSize, NewsTagVariant } from './NewsTag';

const meta = {
  title: 'UI Components/NewsTag',
  component: NewsTag,
  tags: ['autodocs'],
  args: {
    size: NewsTagSize.sm,
    variant: NewsTagVariant.secondary,
    hasEndIcon: true,
    hasBorder: false,
  },
} satisfies Meta<typeof NewsTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-5">
        <div className="inline-flex content-end items-end space-x-3">
          <NewsTag {...args} size={NewsTagSize.xs} variant={NewsTagVariant.secondary}>
            <span className="flex items-center gap-1">
              <Icon
                icon={IconCatalog.sparkles}
                className="h-4 w-4 text-sky-500"
                iconStyle={IconStyle.solid}
              />
              <span>Last update 2 days ago</span>
            </span>
          </NewsTag>
          <NewsTag {...args} size={NewsTagSize.sm} variant={NewsTagVariant.secondary}>
            Last updated 2 days ago
          </NewsTag>
        </div>
      </div>
    );
  },
};
