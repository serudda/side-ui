import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@/components';
import { Select } from './Select';

const meta = {
  title: 'UI Components/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder text',
    id: '1',
    name: 'Select',
    value: 'option3',
    options: [
      { value: 'adventurous', label: 'Esta es una opcion larga larga' },
      { value: 'relaxed', label: 'Relaxed' },
      { value: 'funny', label: 'Funny' },
      { value: 'fabulous', label: 'Fabulous' },
      { value: 'humble', label: 'Humble' },
      { value: 'joyful', label: 'Joyful' },
      { value: 'convincing', label: 'Convincing' },
      { value: 'concerned', label: 'Concerned' },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Choose an option',
    name: 'Select',
    onChange: (selectedOption) => console.log('value: ', selectedOption),
  },
};

export const Temp: Story = {
  render: (args) => (
    <div className="relative flex w-full flex-col gap-8">
      <TextInput value="Esta es una opcion larga larga" />
      <Select {...args} />
    </div>
  ),
};
