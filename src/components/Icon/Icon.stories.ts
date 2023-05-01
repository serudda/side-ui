import type { Meta, StoryObj } from '@storybook/react';
import { parseIconOptions } from '~/storybook/utils';
import { Icon, IconCatalog } from './Icon';

const meta = {
  title: 'UI Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      table: {
        type: {
          summary: 'angle, arrowDown, arrowExternal, etc.',
        },
      },
      options: parseIconOptions(),
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: IconCatalog.adjustmentsHorizontal,
    className: 'w-6 h-6',
  },
};
