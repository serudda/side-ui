import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant, TextInput } from '@/components';
import { Stepper } from './Stepper';

const meta = {
  title: 'UI Components/Controls/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  args: {
    name: 'Stepper',
    minValue: 3,
    maxValue: 10,
    value: 20,
    onChange: (value) => console.log('value: ', value),
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'stepper',
    name: 'Stepper',
    value: 3,
    onChange: (value) => console.log('value: ', value),
  },
};

export const StepperWithTextInput: Story = {
  render: (args) => {
    return (
      <div className="flex items-center gap-3">
        <TextInput value="Tono sarcastico" />
        <Stepper {...args} />
        <Button size={ButtonSize.sm} variant={ButtonVariant.primary}>
          Add
        </Button>
      </div>
    );
  },
};
