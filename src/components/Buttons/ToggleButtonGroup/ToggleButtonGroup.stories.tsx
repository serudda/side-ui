import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToogleGroupProps } from '@/contexts';
import { ToggleButtonGroup } from './ToggleButtonGroup';

const meta = {
  title: 'UI Components/Buttons/ButtonGroup',
  component: ToggleButtonGroup.Root,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ToggleButtonGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToggleExample = (args: ToogleGroupProps) => {
  const [favoriteFruit, setFavoriteFruit] = useState<string | null>('banana');

  const handleChange = (value: string) => {
    console.log(value);
    setFavoriteFruit(value);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <ToggleButtonGroup.Root
        {...args}
        value={favoriteFruit}
        onChange={handleChange}
        aria-label="What is your favorite fruit?"
      >
        <ToggleButtonGroup.Button value="strawberry" className="px-2">
          Strawberry 🍓
        </ToggleButtonGroup.Button>
        <ToggleButtonGroup.Button value="banana" className="px-2">
          Banana 🍌
        </ToggleButtonGroup.Button>
        <ToggleButtonGroup.Button value="apple" className="px-2">
          Apple 🍏
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup.Root>
    </div>
  );
};

export const Default: any = {
  render: (args: any) => <ToggleExample {...args} />,
};
