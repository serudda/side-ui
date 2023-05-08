import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'UI Components/Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter a description',
    name: 'Textarea',
    onChange: (event) => console.log('value: ', event.target.value),
    value: 'Texto',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter a description',
    name: 'Textarea',
    onChange: (event) => console.log('value: ', event.target.value),
  },
};
