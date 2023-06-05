import type {  StoryObj } from '@storybook/react';
import { CopyBtn } from './CopyBtn';
import {  ButtonVariant } from '~/components';
import { parseIconOptions } from '~/storybook/utils';


const meta = {
  title: 'UI Components/Buttons/Copy Button',
  component: CopyBtn,
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
    target: { current: { textContent: 'Text to be copied' } },
    isToolTipActive: true,
    isTextActive: true,
    variant: ButtonVariant.primary,

  },
};

// TODO:
// Add satisfies Meta<typeof CopyBtn> to resolve type conflict with the target property.
// The target property's type is currently conflicting with the expected Meta type for CopyBtn.

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

    variant: ButtonVariant.primary
  },
};