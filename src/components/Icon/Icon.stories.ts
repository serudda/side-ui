import { parseIconOptions } from '@storybook';
import { Icon, IconCatalog, IconStyle } from './Icon';
import type { Meta, StoryObj } from '@storybook/react';

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
    iconStyle: IconStyle.regular,
    className: 'w-6 h-6',
  },
};
