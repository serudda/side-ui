import { useState } from 'react';
import { Button, ButtonSize, ButtonVariant } from '@components';
import { parseIconOptions } from '@storybookConfig';
import { TextInput, TextInputProps } from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Inputs/TextInput',
  component: TextInput,
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
    placeholder: 'Enter your email',
    name: 'Text Input',
    onChange: (event) => console.log('value: ', event.target.value),
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
    name: 'Text Input',
    onChange: (event) => console.log('value: ', event.target.value),
  },
};

export const TextInputExample = (args: TextInputProps) => {
  const [value, setValue] = useState('');
  return (
    <div className="inline-flex content-end items-end space-x-3">
      <TextInput
        {...args}
        className="w-96"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button size={ButtonSize.base} variant={ButtonVariant.primary}>
        Get early Access
      </Button>
    </div>
  );
};

export const TextInputWithButton: Story = {
  render: (args) => <TextInputExample {...args} />,
};
