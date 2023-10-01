import { Collapsible } from './Collapsible';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  args: {
    maxHeight: 300,
    blurSectionHeight: 20,
    lightGradientToColor: 'from-white',
    darkGradientToColor: 'from-slate-950',
    isExpandable: true,
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Collapsible className="max-w-xs" {...args}>
      <div className="max-w-xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    </Collapsible>
  ),
};
