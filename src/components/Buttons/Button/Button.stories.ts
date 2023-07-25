import type { Meta, StoryObj } from '@storybook/react';
import { IconCatalog, IconStyle } from '@/components';
import { parseIconOptions } from '@/storybook/utils';
import { Button, ButtonSize, ButtonVariant, HtmlType } from './Button';

const meta = {
  title: 'UI Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    startIcon: {
      table: {
        type: {
          summary: 'angle, arrowDown, arrowExternal, etc.',
        },
      },
      options: parseIconOptions(),
    },
    endIcon: {
      table: {
        type: {
          summary: 'angle, arrowDown, arrowExternal, etc.',
        },
      },
      options: parseIconOptions(),
    },
  },
  args: {
    children: 'Label text',
    size: ButtonSize.xs,
    variant: ButtonVariant.primary,
    htmlType: HtmlType.button,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label text',
    size: ButtonSize.xs,
    variant: ButtonVariant.primary,
  },
};

export const Twitter: Story = {
  args: {
    children: 'Log in with Twitter',
    size: ButtonSize.sm,
    variant: ButtonVariant.twitter,
    startIcon: IconCatalog.twitter,
    iconStyle: IconStyle.light
  },
};
